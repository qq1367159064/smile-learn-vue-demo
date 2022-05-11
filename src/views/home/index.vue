<template>
  <div class="home">
    <div class="home-container">
      <router-link to="/echart">Echart</router-link>
      <router-link to="/render">Render</router-link>
      <router-link to="/editor">Editor</router-link>
      <router-link to="/treeMenu">treeMenu</router-link>
      <router-link to="/admin">siteSet</router-link>
      <router-link to="/map">map</router-link>
      <router-link to="/scroll">scroll</router-link>
    </div>

    <div class="test">
      <div class="testitem" v-for="(item, index) in testList" :key="index">
        <el-checkbox v-model="item.a"></el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {

  },
  data() {
    return {
      testList: [
        {
          a: false, 
        }
      ]
    }
  },
  method: {

  }
}
</script>

<style lang="less" scoped>

.home-container {
  width: 100%;
  height: 150px;
  > a {
    display: block;
    margin-right: 12px;
  }
}
</style>
