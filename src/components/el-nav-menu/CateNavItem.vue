<template>
  <div>
    <template v-if="!item.children || item.children.length === 0">
      <app-link  :to="resolvePath(item.categoryId)">
        <el-menu-item >
          <item :icon="item.icon||(item.icon&&item.icon)" :title="item.cateogryTitle" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu"  popper-append-to-body>
      <template slot="title">
        <item v-if="item.categoryTitle" :icon="item.icon && icon" :title="item.categoryTitle" />
      </template>
      <NavbarItem
        v-for="child in item.children"
        :key="child.categoryId"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'NavbarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
  
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
