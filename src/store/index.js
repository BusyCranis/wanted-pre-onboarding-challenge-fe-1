import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    islogin: false



  },
  mutations: {

    loginsuccess(state) {
      state.islogin = true
    },




  },
  actions: {
  },
  modules: {
  }
})
