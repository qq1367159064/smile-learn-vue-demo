<template>
  <div class="tree-submenu finger">
    <div class="tree-submenu-title" @click="showChildrenHandle">
      <slot name="title"></slot>
      <svg-icon icon-class="rightarrows" class="svg-icon" :class="{activeIcon: showChildren}" />
    </div>
    <div class="tree-submenu-content">
      <CollapseTransition>
        <div class="sub-animation" v-show="showChildren">
          <slot></slot>
        </div>
      </CollapseTransition>
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
  components: {
    CollapseTransition: () => import("./collapse-transition"),
  },
  data() {
    return {
      showChildren: false,
    };
  },
  methods: {
    showChildrenHandle() {
      this.showChildren = !this.showChildren;
    },
  },
};
</script>

<style lang="less" scoped>
.tree-submenu {
  display: flex;
  width: 100%;
  border: 0px solid red;
  flex-direction: column;
  align-items: center;
  .tree-submenu-title {
    display: flex;
    align-items: center;
    padding-right: 10rem;
    width: 100%;

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
  .tree-submenu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 0px solid red;
    .sub-animation {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
