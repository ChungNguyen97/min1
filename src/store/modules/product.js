import axiosClient from "@/core/api";
const product = {
  namespaced: true,
  state: {
    productList: [],
    isLoading: false,
    productItem: '',
    page_info: {
    },
    priceByAmount: ''
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
    },
    async getProductById({ commit }, productId) {
      try {
        const res = await axiosClient.get(`/graph/${productId}`)
        commit('SET_PRODUCT_ITEM', res)
      } catch (error) {
        console.log(error);
      }
    },

    async updateProductTitle({ commit }, payload) {
      const id = payload.id
      const params = {
        "productTitle": payload.productTitle,
        "price": payload.price
      }
      try {
        const res = await axiosClient.post(`/update/${id}`, params)
        commit('SET_PRODUCT_TITLE', res)
        console.log('res update title: ', res);
      } catch (error) {
        console.log(error);
      }
    },

    async updatePriceByAmount({ commit }, payload) {
      console.log('payload: ', payload);
      try {
        const res = await axiosClient.post('/price-by-amount', payload)
        console.log(res);
        commit('UPDATE_PRICE_BY_AMOUNT', res)
      } catch (error) {
        console.log(error);
      }
    }

  },
  mutations: {
    SET_PRODUCT(state, { products, page_info }) {
      state.productList = products
      state.isLoading = false,
        state.page_info = page_info
    },
    SET_PRODUCT_ITEM(state, data) {
      state.productItem = data
    },
    SET_PRODUCT_TITLE(state, { product }) {
      console.log('productItem: ', state.productItem);
      console.log('title: ', product.title)
      state.productItem.title = product.title
    },
    UPDATE_PRICE_BY_AMOUNT(state, res) {
      state.priceByAmount = res
    }


  },
}
export default product