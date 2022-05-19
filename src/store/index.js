import Vue from 'vue';
import Vuex from 'vuex';
import collectionModule from './modules/collectionModule';
import productModule from './modules/productModule';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    collectionModule,
    productModule
  },
});

