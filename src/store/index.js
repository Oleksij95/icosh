import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [],
    showFlaotBody: false,
    showSearch: false,
    trainingFormats: [
      {
        id: "online_remote",
        name: "онлайн дистанционное",
      },
      {
        id: "online_live",
        name: "онлайн живое"
      },
      {
        id: "online_mixed",
        name: "онлайн смешанное"
      },
      {
        id: "in_enterprises",
        name: "обучение на предприятии"
      } ,
      {
        id: "in_training_center",
        name: "обучение в тренинг центрах"
      }
    ]
  },
  mutations: {
    showFlaotBody(state, value){
      state.showFlaotBody = value
    },

    showSearch(state, value){
      state.showSearch = value
    },

    setBasketItem(state, value) {
      state.basketItems.push(value)
    }

  },
  actions: {
    showFlaotBody({commit}, value){
      commit('showFlaotBody', value)
    },

    showSearch({commit}, value){
      commit('showSearch', value)
    },

    setBasketItem({commit}, item){
      commit("setBasketItem", item)
    }
  },
  getters: {
    basketCount: s => s.basketItems.length,
    showFlaotBody: s => s.showFlaotBody,
    showSearch: s => s.showSearch,
    trainingFormats: s => s.trainingFormats
  },
  modules: {
    
  }
})
