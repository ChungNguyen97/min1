import axiosClient from "@/core/api";

const tags = {
  namespaced: true,

  state: {
    listTag: [],
    isLoad: false,
    updateTag: false,
  },

  getters: {

  },

  actions: {
    async getListTag({ state, commit }, params) {
      try {
        state.isLoad = true
        const res = await axiosClient.get('/tags', { params })
        commit('SET_TAG', res)
      } catch (error) {
        state.isLoad = false
        console.log(error)
      }
    },
    async addTag({ state }, params) {
      try {
        state.isLoading = true
        await axiosClient.post('/add-tag', params)
        state.isLoading = false
      } catch (error) {
        console.log(error);
      }
    },

    async removeTag(context, params) {
      this.updateTag = false
      await axiosClient.post('/remove-tag', params)
      this.updateTag = true
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