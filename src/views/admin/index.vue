<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="前台" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="后台" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="个人介绍" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      activeName: "siteBack",
    };
  },
  methods: {
    handleClick() {
      
    }
  },
};
</script>

<style lang="less" scoped>
</style>
