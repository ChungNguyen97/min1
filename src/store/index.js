import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import login from './modules/account/login.js';
import auth from './modules/auth/auth';
import collection from './modules/collection';
import product from './modules/product';
Vue.use(Vuex);
// import localStorage from '@/plugins/localStorage.js';

const vuexLocal = new VuexPersistence({
  storage: localStorage,
  key: 'token',
  modules: ['auth'],
  path: ['accessToken']
})
export const store = new Vuex.Store({
  //chỉ được phép thay đổi state trong mutations. Hoat dong khi o development env
  strict: process.env.NODE_ENV !== 'production',
  state: {
    value: 'Nguyen Van Chung'
  },
  modules: {
    collection,
    product,
    auth,
    login
  },
  // plugins: [
  //   myPlugin
  // ]
  plugins: [vuexLocal.plugin]
});


