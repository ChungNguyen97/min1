import axiosClient from "@/core/api";
const product = {
  namespaced: true,
  state: {
    productList: [],
    isLoading: false,
    page_info: {

    }
  },
  getters: {
    getProductList: state => state.productList,
    getIsLoading: state => state.isLoading
  },

  actions: {
    async getDataProduct({ state, commit }, params = '') {
      try {
        state.isLoading = true;
        const res = await axiosClient.get('/graph', { params });
        commit('SET_PRODUCT', res)
      } catch (error) {
        state.isLoading = false
        state.productList = []
        console.log(error)
      }

    }

  },
  mutations: {
    SET_PRODUCT(state, { products, page_info }) {
      state.productList = products
      state.isLoading = false,
        state.page_info = page_info
    },

  },
}
export default product