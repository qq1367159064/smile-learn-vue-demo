import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "animate.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import vueRevealScroll from '@/components/reveal-scroll';


Vue.use(vueRevealScroll, {
  class: 'v-scroll-reveal', 
  duration: 800,
  scale: 1,
  container: '.vue-scroll',
  distance: '10px',
  mobile: false
})
Vue.use(ElementUI)

import "@/icons"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
