import axiosClient from "@/core/api";
const product = {
  state: {
    productList: [],
    isLoading: true,
    params: {
      limit: 10,
      search: ''
    }
  },
  getters: {
    getProductList: state => state.productList,
    getIsLoading: state => state.isLoading
  },

  actions: {
    async getListProduct({ state,commit }) {
      const params = state.params
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
    SET_SEARCH(state){
      state.params.search=''
    }
  },
}
export default product