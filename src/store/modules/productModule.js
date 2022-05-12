import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const productModule  = new Vuex.Store({
  state: {
  },

  mutations: {
    updateTitleOption(state) {
      return state.result++
    },
  },
  actions: {
    updateResultOption: ({ commit }) => {
      commit("updateResultOption")
    }
  },
})
export default productModule