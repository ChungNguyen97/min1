import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import ProductPage from '@/pages/ProductPage'
import PageNotFound from '@/pages/PageNotFound'
import { store } from '@/store'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      beforeEnter(to, from, next) {
        if (store.state.login.isLogin) {
          next()
        } else {
          alert('Bạn cần đăng nhập để vào trang chủ')
          next({path:'/login',query:{redirect:''}})
        }
      }
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter(to, from, next) {
        if (store.state.login.isLogin) {
          alert('Bạn đã đăng nhập rồi!')
          next({path:'/',query:{redirect:'/login'}})
        } else {
          next()
        }
      }
    },
    {
      path:'*',
      name:'page-notFound',
      component:PageNotFound
    }

  ]
})
