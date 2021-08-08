import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFlaotBody: false,
    showSearch: false
  },
  mutations: {
    showFlaotBody(state, value){
      state.showFlaotBody = value
    },
    showSearch(state, value){
      state.showSearch = value
    }
  },
  actions: {
    showFlaotBody({commit}, value){
      commit('showFlaotBody', value)
    },
    showSearch({commit}, value){
      commit('showSearch', value)
    }
  },
  getters: {
    showFlaotBody: s => s.showFlaotBody,
    showSearch: s => s.showSearch
  },
  modules: {
    
  }
})
