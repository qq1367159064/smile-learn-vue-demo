<template>
  <div class="tree-menu-item menu-item finger">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TreeMenuItem",
  props: {
    index: {
      type: [Number, String], 
      default: 0
    },
  },
  computed: {
    
  },
  components: {
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.tree-menu-item {
  // display: flex;
  // align-items: center;
}
</style>
