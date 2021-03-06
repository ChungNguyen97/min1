import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import ProductPage from '@/pages/ProductPage'
import PageNotFound from '@/pages/PageNotFound'
import ProductDetail from '@/components/product/productDetail/ProductDetail'
import { store } from '@/store'
import SupportPage from "@/pages/SupportPage.vue";
import TagPage from '@/pages/TagPage.vue'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      beforeEnter(to, from, next) {
        if (store.state.auth.accessToken) {
          next()
        } else {
          next({ name: 'loginPage' })
        }
      }
    },
    {
      path: '/product',
      name: 'productPage',
      component: ProductPage
    },
    {
      path: '/tag',
      name: 'tagPage',
      component: TagPage,
      beforeEnter(to, from, next) {
        if (store.state.auth.accessToken) {
          next()
        } else {
          next({ name: 'loginPage' })
        }
      }
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage,
      beforeEnter(to, from, next) {
        if (store.state.auth.accessToken) {
          next({ name: 'homePage' })
        } else {
          next()
        }
      }
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    },
    {
      path: '/support',
      name: 'supportPage',
      component: SupportPage
    }

  ]
})
