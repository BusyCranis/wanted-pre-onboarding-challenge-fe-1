import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    islogin: false,

    usersId: null



  },
  mutations: {

    loginsuccess(state) {
      state.islogin = true
    },

    getuser(state, payload) {

      state.usersId = payload

    }




  },
  actions: {
  },
  modules: {
  }
})
