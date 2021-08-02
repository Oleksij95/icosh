import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFlaotBody: false
  },
  mutations: {
    showFlaotBody(state, value){
      state.showFlaotBody = value
    }
  },
  actions: {
    showFlaotBody({commit}, value){
      commit('showFlaotBody', value)
    }
  },
  getters: {
    showFlaotBody: s => s.showFlaotBody
  },
  modules: {
    
  }
})
