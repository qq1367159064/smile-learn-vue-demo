<template>
  <div class="tree-menu-group">
    <div class="tree-menu-group-title" @click="showChildenHandle">
      <slot name="title"></slot>
      <svg-icon
        icon-class="rightarrows"
        :class="{ activeIcon: showChilden }"
        class="svg-icon"
      />
    </div>
    <CollapseTransition>
      <div class="tree-menu-group-content" v-show="showChilden">
        <slot></slot>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import CollapseTransition from "./collapse-transition";
export default {
  name: "TreeMenuGroup",
  props: {
    direction: {
      type: String,
      default: "vertical",
    },
  },
  components: { CollapseTransition },
  data() {
    return {
      showChilden: false,
    };
  },
  methods: {
    showChildenHandle() {
      this.showChilden = !this.showChilden;
    },
  },
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
