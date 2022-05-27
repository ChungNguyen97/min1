import axiosClient from "@/core/api";
const product = {
  namespaced: true,
  state: {
    productList: [],
    isLoading: true,
  },
  getters: {
    getProductList: state => state.productList,
    getIsLoading: state => state.isLoading
  },

  actions: {
    async getDataProduct({ commit },params='') {
      try {
        const res = await axiosClient.get('/graph', {params});
        const productList = await res.products;
        commit('SET_PRODUCT', productList)
      } catch (error) {
        console.log(error)
      }
    }
    
  },
  mutations: {
    SET_PRODUCT(state, productList) {
      state.productList = productList
      state.isLoading = false
    },
  
  },
}
export default product