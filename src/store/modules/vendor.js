import axiosClient from "@/core/api"

const vendor = {
  namespaced:true,
  state: {
    vendorList: []
  },
  getters: {
    getVendorList: state => state.vendorList
  },
  actions: {
    async getVendorData({commit}){
      const res = await axiosClient.get('vendors')
      commit('SET_VENDOR',res.vendors)
    }
  },
  mutations: {
    SET_VENDOR(state,data){
      state.vendorList = data
    }
  }
}

export default vendor