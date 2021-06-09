<template>
  <div>
    <template v-if="!item.children || item.children.length === 0">
      <el-menu-item :index="item.categoryId + ''">
        <item
          :icon="item.icon === undefined ? '' : item.icon"
          :title="item.categoryTitle"
        />
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.cateogryId + ''" popper-append-to-body>
      <template slot="title">
        <item
          :icon="item.icon === undefined ? '' : item.icon"
          :title="item.categoryTitle"
        />
      </template>
      <NavbarItem
        v-for="child in item.children"
        :key="child.categoryId"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "NavbarItem",
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true,
      
    }
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>
