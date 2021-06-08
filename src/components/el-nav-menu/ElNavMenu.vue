<template>
  <div class="">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <NavItem v-for="(item, index) in categoryList" :key="index" :item="item"/>
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
import NavItem from "./CateNavItem.vue"
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
              categoryTitle: "子目录1",
              categoryId: 1,
              parentId: 1,
              children: [
                {
                  categoryTitle: "子目录2",
                  categoryId: 11,
                  parentId: 1,
                },
                {
                  categoryTitle: "子目录2",
                  categoryId: 21,
                  parentId: 1,
                },
                {
                  categoryTitle: "子目录2",
                  categoryId: 31,
                  parentId: 1,
                },
                {
                  categoryTitle: "子目录2",
                  categoryId: 41,
                  parentId: 1,
                },
              ],
            },
            {
              categoryTitle: "子目录1",
              categoryId: 2,
              parentId: 1,
            },
            {
              categoryTitle: "子目录1",
              categoryId: 3,
              parentId: 1,
            },
            {
              categoryTitle: "子目录1",
              categoryId: 4,
              parentId: 1,
            },
          ],
        },
        {
          categoryTitle: "父目录2",
          categoryId: 5,
          parentId: 0,
          children: [
            {
              categoryTitle: "子目录2",
              categoryId: 6,
              parentId: 1,
            },
            {
              categoryTitle: "子目录2",
              categoryId: 7,
              parentId: 1,
            },
            {
              categoryTitle: "子目录2",
              categoryId: 8,
              parentId: 1,
            },
            {
              categoryTitle: "子目录2",
              categoryId: 9,
              parentId: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
