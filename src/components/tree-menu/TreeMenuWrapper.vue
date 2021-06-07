<template>
  <div class="tree-menu-wrapper">
    <TreeMenuItem
      :currentIndex="currentIndex"
      :menuItem="item"
      @artiveHandle="artiveHandle"
      v-for="item in categoryList"
      :key="item.categoryId"
    />
  </div>
</template>

<script>
import TreeMenuItem from "./TreeMenuItem";
export default {
  name: "ThreeMenuWrapper",
  components: {
    TreeMenuItem,
  },
  data() {
    return {
      currentIndex: 0,
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
  methods: {
    artiveHandle(id) {
      this.currentIndex = id
    }
  },
};
</script>

<style lang="less">
.activeStatus {
  color: #4386f4;
}
</style>
<style lang="less" scoped>
.tree-menu-wrapper {
  user-select: none;
  display: flex;
  border: 0px solid red;
  flex-direction: column;
}
</style>
