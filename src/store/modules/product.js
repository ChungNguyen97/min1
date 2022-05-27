import axiosClient from "@/core/api";
const product = {
  namespaced: true,
  state: {
    productList: [],
    isLoading: true,
    page_info: {
      
    }
  },
  getters: {
    getProductList: state => state.productList,
    getIsLoading: state => state.isLoading
  },

  actions: {
    async getDataProduct({ commit }, params = '') {
      try {
        const res = await axiosClient.get('/graph', { params });
        commit('SET_PRODUCT', res)
      } catch (error) {
        console.log(error)
      }
    }

  },
  mutations: {
    SET_PRODUCT(state, {products,page_info}) {
      state.productList = products
      state.isLoading = false,
      state.page_info = page_info
    },

  },
}
export default product