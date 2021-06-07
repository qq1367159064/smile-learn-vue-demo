<template>
  <div class="tree-menu-group">
    
  </div>
</template>

<script>
export default {
  name: "TreeMenuGroup",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.tree-menu-group {
  display: flex;
  flex-direction: column;
  border: 0px solid red;
  cursor: pointer;
  .tree-menu-group-title {
    display: flex;
    align-items: center;
    border: 0px solid red;
    .svg-icon {
      transition: 0.3s;
    }
    .activeIcon {
      transform: rotate(90deg);
      -ms-transform: rotate(90deg); /* IE 9 */
      -moz-transform: rotate(90deg); /* Firefox */
      -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
      -o-transform: rotate(90deg);
    }
  }

  .tree-menu-group-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
