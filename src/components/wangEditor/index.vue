<template>
  <div :id="id">
    
  </div>
</template>

<script>
const nanoid = require('nanoid')
import E from "wangeditor"
export default {
  name: 'index',
  components: {

  },
  data() {
    return {
      id: nanoid.nanoid()
    }
  },
  mounted() {
    const e = new E(`#${this.id}`)
    e.create()
  },
  method: {

  }
}
</script>

<style lang="less" scoped>

</style>
