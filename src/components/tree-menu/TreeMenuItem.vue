<template>
  <div class="tree-menu-item menu-item finger">
    <slot></slot>
    <svg-icon
      v-if="isMore"
      icon-class="rightarrows"
      class="svg-icon"
      :class="{ activeIcon: showChildren }"
    />
  </div>
</template>

<script>
export default {
  name: "TreeMenuItem",
  props: {
    index: {
      type: [Number, String],
      default: 0,
    },
    offSet: {
      type: Number,
      default: 2,
    },
  },
  computed: {},
  components: {},
  data() {
    return {
      showChildren: false,
      isMore: false
    };
  },
  methods: {
    
    handelMore() {
      this.isMore = !this.isMore
    }
  },
};
</script>

<style lang="less" scoped>
.tree-menu-item {
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
</style>
