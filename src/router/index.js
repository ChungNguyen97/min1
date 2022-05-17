import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/pages/HomePage'
import ProductList from '../components/product/ProductList'
import Collection from '../components/collection/Collection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
  ]
})
