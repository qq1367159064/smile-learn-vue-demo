pipeline {
  agent any
  tools {nodejs "v14.17.6"} 
  stages {
    stage ('拉取代码') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'localhostssh', url: 'git@gitlab.wtnhz.cn:smile-learn-project/smile-learn-demo.git']]])
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