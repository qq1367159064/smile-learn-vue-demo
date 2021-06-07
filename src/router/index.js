import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/home/index") 
  },
  {
    path: "/echart",
    meta: {
      title: "Echart"
    },
    component: () => import("@/views/echart/index")
  },
  {
    path: "/render",
    component: () => import("@/views/render/index"),
    meta: {
      title: "渲染函数",
    }
  },
  {
    path: "/editor",
    component: () => import("@/views/editor/index"),
    meta: {
      title: "编辑器"
    }
  },
  {
    path: "/treeMenu",
    component: () => import ("@/views/tree/index"),
    meta: {
      title: "树形菜单"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
