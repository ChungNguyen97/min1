import productApi from "@/core/productApi";

const productModule = {
  state: {
    productList: [],
  },
  getters: {
    getList: state => state.productList
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
    }
  },
}
export default productModule