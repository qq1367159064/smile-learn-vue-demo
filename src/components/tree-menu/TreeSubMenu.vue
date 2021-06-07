<template>
  <div class="tree-submenu">
    <slot name="title"></slot>
    <slot></slot>
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
