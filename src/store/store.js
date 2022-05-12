import Vue from 'vue';
import Vuex from 'vuex';
import collectionModule from './modules/collection'
import productModule from './modules/productModule'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    global: '',
  },
  modules: {
    collectionModule,
    productModule
  },


});

