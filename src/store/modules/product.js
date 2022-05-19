import axiosClient from "@/core/api";


const productModule = {
  state: {
    productList: [],
    isLoad: true,
    params: {
      limit: 4,
      search: ''
    }
  },
  getters: {
    getList: state => state.productList,
    getIsLoad: state => state.isLoad
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
      state.isLoad = false
    },
    SET_SEARCH(state){
      state.params.search=''
    }
  },
}
export default productModule