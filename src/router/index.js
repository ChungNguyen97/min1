import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import ProductPage from '@/components/pages/product/ProductPage' 

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
