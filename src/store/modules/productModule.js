import axiosClient from "@/core/api";


const productModule = {
  state: {
    productList: [],
    isLoad:true,
  },
  getters: {
    getList: state => state.productList,
    getIsLoad: state => state.isLoad
  },


  actions: {
    async getListProduct({commit}) {
      try {
        const res = await axiosClient.get('/graph');
        const productList = await res.products;
        commit('SET_PRODUCT', productList)
      }catch(error){
        console.log(error)
      }

    }

    
  },
  mutations: {
    SET_PRODUCT(state, productList) {
      state.productList = productList
      state.isLoad = false
    }
  },
}
export default productModule