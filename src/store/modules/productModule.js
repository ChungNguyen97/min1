import productApi from "@/core/productApi";


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
        const res = await productApi.getAll();
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