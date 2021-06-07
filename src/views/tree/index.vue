<template>
  <div class="three">
    <ThreeMenu/>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
    ThreeMenu: () => import("@/components/tree-menu/TreeMenuWrapper")
  },
  data() {
    return {

    }
  },
  method: {

  }
}
</script>

<style lang="less" scoped>

</style>
