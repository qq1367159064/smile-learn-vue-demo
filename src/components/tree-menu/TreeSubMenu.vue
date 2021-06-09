<template>
  <div class="tree-submenu finger">
    <div class="tree-submenu-title menu-item" @click="showChildrenHandle">
      <slot name="title"></slot>
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
  offSet: {
    type: Number,
    default: 2,
  },
  mounted() {

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
    width: 100%;
  
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
