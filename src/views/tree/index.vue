<template>
  <div class="three">
    <ThreeMenu>
      <MenuItem>导航1</MenuItem>
      <MenuItem>导航2</MenuItem>
      <MenuItem>导航3</MenuItem>
      <MenuSub>
        <template slot="title">
          <MenuItem>导航4</MenuItem>
        </template>
        <MenuItem>导航3</MenuItem>
        <MenuItem>导航3</MenuItem>
        <MenuItem>
          <MenuSub>
            <template slot="title">
              <MenuItem>导航5</MenuItem>
            </template>
            <MenuItem>导航3</MenuItem>
            <MenuItem>导航3</MenuItem>
            <MenuItem>导航3</MenuItem>
          </MenuSub>
        </MenuItem>
      </MenuSub>
    </ThreeMenu>
    <!-- <elMenu /> -->
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    ThreeMenu: () => import("@/components/tree-menu/TreeMenuWrapper"),
    MenuItem: () => import("@/components/tree-menu/TreeMenuItem.vue"),
    MenuSub: () => import("@/components/tree-menu/TreeSubMenu.vue"),
    // elMenu: () => import("@/components/el-nav-menu/ElNavMenu.vue")
  },
  data() {
    return {};
  },
  method: {},
};
</script>

<style lang="less" scoped>
.three {
  width: 20rem;
}
</style>
