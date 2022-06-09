import axiosClient from "@/core/api";

const tags = {
  namespaced: true,

  state: {
    listTag: [],
    isLoad: false
  },

  getters: {

  },

  actions: {
    async getListTag({ state, commit }, params) {
      try {
        state.isLoad = true
        const res = await axiosClient.get('/tags', { params })
        console.log('res', res);
        commit('SET_TAG', res)
      } catch (error) {
        state.isLoad = false
        console.log(error)
      }
    }
  },
  mutations: {
    SET_TAG(state, res) {
      state.listTag = res.tags
      state.isLoad = false
    }
  }


}
export default tags