import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const collectionModule = new Vuex.Store({
  state: {
  },
  getters: {
    // getTitle(state) {
    //   return state.title
    // }
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

export default collectionModule