import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: import('../views/home_page.vue')
  },
  {
    path: '/camera',
    name: 'camera_page',
    component: () => import('../views/camera_page.vue')
  },
  {
    path: '/info',
    name: 'info_page',
    component: () => import('../views/info_page.vue')
  },
  {
    path: '/post',
    name: 'post_page',
    component: () => import('../views/post_page.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
