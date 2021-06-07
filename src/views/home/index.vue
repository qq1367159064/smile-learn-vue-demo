<template>
  <div class="home">
    <div class="home-container">
      <router-link to="/echart">Echart</router-link>
      <router-link to="/render">Render</router-link>
      <router-link to="/editor">Editor</router-link>
      <router-link to="/treeMenu">treeMenu</router-link>
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
