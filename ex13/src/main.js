import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import './datasource/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created(){
    //사용자가 로그아웃, 비밀번호 등을 변경했을 때
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if (pUserInfo) {
        store.dispatch('fnDoLoginAuto', pUserInfo)
        }
      })
  },
  render: h => h(App)
}).$mount('#app')
