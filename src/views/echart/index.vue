<template>
  <div class="app-container">
    <!-- 绘制图表 -->
    <div class="echart" ref="echartOne"></div>
    <div class="echart" ref="echartTwo"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echart",
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.initOne();
      this.initTwo();
    });
  },
  methods: {
    initTwo() {
      this.two = echarts.init(this.$refs["echartTwo"]);
      this.two.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            roseType: "radius",
            center: ["50%", "38%"],
            animationEasing: "cubicInOut",
            animationDuration: 1000,
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
          },
        ],
      });
    },
    initOne() {
      this.one = echarts.init(this.$refs["echartOne"]);

      this.one.setOption({
        title: {
          text: "Echart实例",
        },
        tooltip: {},
        /* x轴上的显示数据 */
        xAxis: {
          data: ["vue", "java", "spring"],
        },
        /* y轴上显示的数据 */
        yAxis: {},
        /*
          seriea: 系列
          1. 表示一组数值以及他们映射成的图
          2. 一个系列中包含的要素
            + 一组数值
            + 图标类型(series.type)
            + 以及其他的关于这些数据如何映射成图的参数
            + series.type有: 
              ++ line 折线
              ++ bar 柱状图
              ++ pie 饼图
              ++ scatter 散点图
              ++ graph 关系图
              ++ tree 树形图
        */
        series: [
          {
            name: "数量",
            type: "bar",
            data: [5, 20, 30],
          },
          {
            name: "数量",
            type: "line",
            data: [5, 20, 30],
          },
        ],
      });
    },
  },
  data() {
    return {
      one: null,
      two: null,
    };
  },
  method: {},
};
</script>

<style lang="less" scoped>
.echart {
  margin-bottom: 15px;
  width: 100%;
  height: 200px;
}
</style>
