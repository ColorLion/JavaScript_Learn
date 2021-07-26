import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start_page',
    component: () => import('../components/start_page.vue')
  },
  {
    path: '/main',
    name: 'main_page',
    component: () => import('../components/main_page.vue'),
    //메인 페이지는 인증과 연동
    meta: {bAuth: true}
  },
  {
    path: '/*',
    name: 'error_page',
    component: () => import('../components/error_page.vue')
  }
]

//라우터 이동에 개입해 인증이 필요한 경우 login 페이지 전환
router.beforeEach((to, from, next) => {
  const bNeedAuth = to.matched.some(record => record.meta.bAuth)
  const bCheckAuth = firebase.auth().currentUser

  if (bNeedAuth && !bCheckAuth) {
    next('/login')
  }else{
    next()
  }
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
