import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    course: {},
    basketItems: [],
    showFlaotBody: false,
    showSearch: false,
    selectedFormat: "",
    totalPrice: 0,
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
    },
    
    setCourse(state, value) {
      state.course = value
    },

    setSelectedFormat(state, value) {
      state.selectedFormat = value
    },

    addTotalPrice(state, price) {
      state.totalPrice += price
    },

    removeTotalPrice(state, priceToRemove) {
      state.totalPrice -= priceToRemove
    },
    
    removeBasketItem(state, index) {
      state.basketItems.splice(index, 1)
    },

    addCourseCount(state, index) {
      state.basketItems[index].course_count++
    },

    minusCourseCount(state, index) {
      if (state.basketItems[index].course_count > 1) {
        state.basketItems[index].course_count--
      }
    },
    changeCourseBasketPrice(state, index){
      console.log(state, index)
    }
  },
  actions: {

    setCourse({commit}, value) {
      commit("setCourse", value)
    },

    showFlaotBody({commit}, value){
      commit('showFlaotBody', value)
    },

    showSearch({commit}, value){
      commit('showSearch', value)
    },

    setBasketItem({commit}, item){
      commit("setBasketItem", item)
      commit("addTotalPrice", item.course_price)
    },

    setSelectedFormat({commit}, selectedFormat){
      commit('setSelectedFormat', selectedFormat)
    },

    removeBasketItem({commit}, {itemIndex, itemPrice}){
      commit('removeBasketItem', itemIndex)
      commit('removeTotalPrice', itemPrice)
    },


    changeCourseCount({commit, dispatch}, {indexCourse, typeOperation}){
      if (typeOperation === "plus") {
        commit('addCourseCount', indexCourse)
      } else if (typeOperation === "minus") {
        commit('minusCourseCount', indexCourse)
      }
      dispatch('changeCourseBasketPrice', indexCourse)
    },

    changeCourseBasketPrice({commit}, index){
      console.log(index)
      commit('changeCourseBasketPrice', index)
    }

  },
  getters: {
    course: s => s.course,
    basketCount: s => s.basketItems.length,
    basketItems: s => s.basketItems,
    showFlaotBody: s => s.showFlaotBody,
    showSearch: s => s.showSearch,
    trainingFormats: s => s.trainingFormats,
    selectedFormat: s => s.selectedFormat,
    totalPrice: s => s.totalPrice
  },
  modules: {
    
  }
})
