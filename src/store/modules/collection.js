<<<<<<< HEAD
// import Vuex from 'vuex'

// const collectionModule = new Vuex.Store({
//   state: {
//   },
//   getters: {
//     getTitle(state) {
//       return state.title
//     }
//   },
//   mutations: {
//     updateTitleOption(state) {
//       return state.result++
//     },
//   },
//   actions: {
//     updateResultOption: ({ commit }) => {
//       commit("updateResultOption")
//     }
//   },

// })

// export default collectionModule
=======
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const collectionModule = new Vuex.Store({
  state: {
    title:'value'
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
>>>>>>> feature/collection_feature
