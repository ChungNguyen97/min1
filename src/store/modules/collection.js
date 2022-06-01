import axiosClient from "@/core/api"

const collection = {
  namespaced: true,
  state: {
    collections: []
  },
  getters: {
    getCollections: state => state.collections
  },

  mutations: {
    UPDATE_COLLECTION(state,data){
      state.collections = data
    }
  },
  actions: {
    async getCollectionData({commit}){
      try{
        const res = await axiosClient.get('collections')
        const collecionData = await res.collections
        commit('UPDATE_COLLECTION', collecionData)
      }catch(error){
        console.log(error);
      }
    }
  },

}

export default collection
