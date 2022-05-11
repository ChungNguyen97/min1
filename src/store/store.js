import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: '',
  },

  getters: {
    getTitle: state => {
      return state.title
    },
  },
  mutations: {
    updateTitleOption(state) {
      return state.result ++
    },
    
  },
  actions: {
    updateResultOption: ({ commit }) => {
      commit("updateResultOption")
    }
  
  },
});

