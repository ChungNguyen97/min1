import noImageAvaiable from '@/assets/image/no_image_avaiable.png';
import axiosClient from "@/core/api";

const product = {
  namespaced: true,
  state: {
    productList: [],
    isLoading: false,
    page_info: {},
    isUpdateSuccess: false,
    productItem: '',
    noImageAvaiable
  },

  getters: {
    getProductList: state => state.productList,
    getIsLoading: state => state.isLoading,
    getVariants: state => state.productItem ? state.productItem.variants : ''
  },

  actions: {
    async getDataProduct({ state, commit }, params = '') {
      try {
        state.isLoading = true;
        const res = await axiosClient.get('/graph', { params });
        commit('SET_PRODUCT', res)
      } catch (error) {
        state.isLoading = false
        console.log(error)
      }
    },

    async getProductById({ commit }, payload) {
      try {
        const res = await axiosClient.get(`/graph/${payload.id}`)
        commit('SET_PRODUCT_ITEM', res)
      } catch (error) {
        console.log(error);
      }
    },

    async updateProductTitle({ state, commit }, payload) {
      const params = {
        productTitle: payload.productTitle,
        price: payload.price
      }
      try {
        state.isLoading = true
        state.isUpdateSuccess = false
        const res = await axiosClient.post(`/update/${payload.id}`, params)
        commit('SET_PRODUCT_TITLE', res)
      } catch (error) {
        state.isLoading = false
        console.log(error);
      }
    },

    async updatePriceByAmount({ state, commit }, payload) {
      try {
        state.isLoading = true
        const res = await axiosClient.post('/price-by-amount', payload)
        commit('UPDATE_PRICE_BY_AMOUNT', res)
      } catch (error) {
        state.isLoading = false
        console.log(error);
      }
    },

    async updatePriceByPercent({ state, commit }, payload) {
      try {
        state.isLoading = true
        const res = await axiosClient.post('/price-by-percent', payload)
        commit('UPDATE_PRICE_BY_AMOUNT', res)
      } catch (error) {
        state.isLoading = false
        console.log(error);
      }
    },
    

  },

  mutations: {
    SET_PRODUCT(state, { products, page_info }) {
      state.isLoading = false
      state.productList = products
      state.page_info = page_info
    },
    SET_PRODUCT_ITEM(state, res) {
      state.productItem = res
    },
    SET_TAG_PRODUCT_ITEM(state, res) {
      state.productItem.tags = res
    },

    SET_PRODUCT_TITLE(state, { product }) {
      state.productItem.title = product.title
      state.isUpdateSuccess = true
      state.isLoading = false
    },
    UPDATE_PRICE_BY_AMOUNT(state, res) {
      const variants = state.productItem.variants
      for (let variant of variants) {
        if (variant.id === res.id) {
          variant.price = res.price
        }
      }
      state.isLoading = false
    },

  },
}
export default product