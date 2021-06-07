<template>
  <div class="app-container">
    <div v-for="item in 10" :key="item">
      {{item}}
      
      <div v-if="item === 1">
        <WangEditor/>
      </div>
    </div>
    <!-- <div v-for="item in 30" :key="item"> {{item}}</div> -->
  </div>
</template>

<script>
import WangEditor from "@/components/wangEditor";
export default {
  name: "index",
  components: {
    WangEditor,
  },
  data() {
    return {};
  },
  method: {},
};
</script>

<style lang="less" scoped>
</style>
