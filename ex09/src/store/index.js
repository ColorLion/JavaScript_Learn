import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //sTitle 값을 상태값으로 정의
    sTitle: '',
    sTitle1: ''
  },
  //getters와 대칭되는 setter의 역할
  mutations: {
    // 파라미터로 전달받은 값을 store에 저장
    fnSetData: function (state, payload){
      return state.sTitle = payload
    },
    fnSetData: function (state, payload){
      return state.sTitle1 = payload
    }
  },
  getters: {
    // store의 상태 값 반환
    fnGetData(state){
      return state.sTitle;
    },
    fnGetData1(state){
      return state.sTitle1;
    }
  },
  actions: {
  },
  modules: {
  }
})
