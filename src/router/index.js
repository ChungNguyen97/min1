import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HomePage from '@/components/pages/HomePage'


Vue.use(Router)



export default new Router({
  mode: 'history',

=======

import HomePage from '@/components/pages/HomePage'
import ProductList from '../components/product/ProductList'
import Collection from '../components/collection/Collection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
>>>>>>> feature/collection_feature
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
<<<<<<< HEAD
    }
=======
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
>>>>>>> feature/collection_feature
  ]
})
