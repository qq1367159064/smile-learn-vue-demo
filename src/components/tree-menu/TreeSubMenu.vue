<template>
  <div class="tree-submenu">
    <div class="tree-submenu-title">
      <slot name="title"></slot>
      <svg-icon icon-class="category"/>
    </div>
    <div class="tree-submenu-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeSubMenu",
  index: {
    type: [Number, String],
    default: 0,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
