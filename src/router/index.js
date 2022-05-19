import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: ProductPage
    }

  ]
})
