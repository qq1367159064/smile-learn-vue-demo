<template>
  <div class="">
    <el-menu class="el-menu-vertical-demo">
      <NavItem
        v-for="(item, index) in categoryList"
        :key="index"
        :item="item"
      />
    </el-menu>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
import Vue from "vue";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
import NavItem from "./CateNavItem.vue";
export default {
  name: "ElNavMenu",
  components: { NavItem },
  data() {
    return {
      categoryList: [
        {
          categoryTitle: "父目录1",
          categoryId: 0,
          parentId: 0,
          children: [
            {
              categoryTitle: "父目录11",
              categoryId: 6,
              parentId: 0,
            },
            {
              categoryTitle: "父目录12",
              categoryId: 9,
              parentId: 0,
            },
            {
              categoryTitle: "父目录13",
              categoryId: 10,
              parentId: 0,
            },
          ],
        },
        {
          categoryTitle: "父目录2",
          categoryId: 5,
          parentId: 0,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
