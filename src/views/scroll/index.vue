<template>
  <div class="vue-scroll">
    <div
      class="v-scroll-reveal test"
      v-scroll-reveal.reset
      v-for="item in 20"
      :key="item"
    >
      ceshi
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {};
  },
  mounted() {
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.vue-scroll {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  > div {
    width: 500px;
    height: 300px;
    margin-bottom: 10px;
    border: 1px solid red;
  }
}
</style>
