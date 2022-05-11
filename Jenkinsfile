pipeline {
  agent any
  tools {nodejs "v14.17.6"} 
  stages {
    stage ('拉取代码') {
      steps {
        //checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'localhostssh', url: 'git@gitlab.wtnhz.cn:smile-learn-project/smile-learn-demo.git']]])
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'fc4ca5f7-6b94-48a2-a885-ed7fa169cc63', url: 'https://gitlab.wtnhz.cn/smile-learn-project/smile-learn-demo.git']]])
      }
    }
    stage ('项目构建'){
      steps { 
        sh 'npm i' 
        sh 'npm run build'
      }
    }
  }
  post {
    always {
      echo 'master'
    }
  }
}