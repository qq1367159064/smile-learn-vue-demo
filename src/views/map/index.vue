<template>
  <div class="map">
    <div id="container"></div>
    <div class="info">
      <h4 id="status"></h4>
      <hr />
      <p id="result"></p>
      <hr />
      <p>
        由于众多浏览器已不再支持非安全域的定位请求，为保位成功率和精度，请升级您的站点到HTTPS。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},

  created() {},

  mounted() {
    this.$nextTick(() => {
      window.onload = () => {
        this.initMap();
      };
    });
  },
  methods: {
    initMap() {
      let src =
        'https://webapi.amap.com/maps?v=1.4.15&key=9ab76183b146881b4b3dbeede850d8ad&plugin=AMap.PlaceSearch,AMap.AdvancedInfoWindow';
      //  创建一个script dom元素
      var jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = src;
      document.head.appendChild(jsapi);

      this.map = new AMap.Map('container', {
        resizeEnable: true,
      });
      AMap.plugin('AMap.Geolocation', function () {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB', //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            this.onComplete(result);
          } else {
            this.onError(result);
          }
        });
      });
    },
    //解析定位结果
    onComplete(data) {
      document.getElementById('status').innerHTML = '定位成功';
      var str = [];
      str.push('定位结果：' + data.position);
      str.push('定位类别：' + data.location_type);
      if (data.accuracy) {
        str.push('精度：' + data.accuracy + ' 米');
      } //如为IP精确定位结果则没有精度信息
      str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
      document.getElementById('result').innerHTML = str.join('<br>');
    },
    //解析定位错误信息
    onError(data) {
      document.getElementById('status').innerHTML = '定位失败';
      document.getElementById('result').innerHTML =
        '失败原因排查信息:' + data.message;
    },
  },
  data() {
    return {
      map: null,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
