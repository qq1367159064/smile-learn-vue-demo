<template>
  <div class="tree-menu-item">
    <template v-if="!isChilde">
      <svg-icon icon-class="category" />
      <span
        :class="{ activeStatus: _currentIndex === menuItem.categoryId }"
        @click="activeHandle(menuItem.categoryId)"
      >
        {{ menuItem.categoryTitle }}
      </span>
    </template>
    <TreeMenuGroup v-else>
      <div slot="title">
        <svg-icon icon-class="category" />
        <span slot="title" @click="activeHandle(menuItem.categoryId)">
          {{ menuItem.categoryTitle }}
        </span>
      </div>
      <TreeMenuItem
        :currentIndex="_currentIndex"
        :menuItem="item"
        @artiveHandle="activeHandle"
        v-for="item in menuItem.children"
        :key="item.categoryId"
      />
    </TreeMenuGroup>
  </div>
</template>

<script>
export default {
  name: "TreeMenuItem",
  props: {
    menuItem: {
      type: Object,
      default() {
        return {};
      },
    },
    currentIndex: {
      type: [String, Object, Number],
      default: 0,
    },
  },
  computed: {
    _currentIndex: {
      get() {
        return this.currentIndex;
      },
      set() {},
    },
    /* 判断是否有子节点 */
    isChilde() {
      if (!this.menuItem || !this.menuItem.children) return false;

      return this.menuItem.children.length > 0;
    },
  },
  components: {
    TreeMenuGroup: () => import("./TreeMenuGroup.vue"),
  },
  data() {
    return {};
  },
  methods: {
    activeHandle(id) {
      this.$emit("artiveHandle", id);
    },
    subActiveHandle(id) {
      this.$emit("artiveHandle", id);
    },
  },
};
</script>

<style lang="less" scoped>
.tree-menu-item {
  display: flex;
  align-items: center;
}
</style>
