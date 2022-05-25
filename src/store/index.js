import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import login from './modules/account/login.js';
import auth from './modules/auth/auth';
import collection from './modules/collection';
import product from './modules/product';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: localStorage,
  key: 'token',
  modules: ['auth'],
  path: ['accessToken']
})
export const store = new Vuex.Store({
  modules: {
    collection,
    product,
    auth,
    login
  },
  plugins: [vuexLocal.plugin]
});


