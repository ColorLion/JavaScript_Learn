import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modProvider from './provider.js'
import modCommon from './common.js'

Vue.use(Vuex)

//규모가 커지니 스토어를 모듈로 분리
export default new Vuex.Store({
  modules: {
    // common 모듈: 시간지연, 에러미시지 처리 공통
    common: modCommon,
    // provider 모듈: 구글과 이메일 인증 처리
    provider: modProvider
  },
  plugins: [(new VuexPersistence({
    storage: window.localStorage
  })).plugin]
})
