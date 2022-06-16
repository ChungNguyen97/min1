import Vue from 'vue'
import Notification from 'vue-notification'
import SvgIcon from 'vue-svgicon'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import { store } from './store'
import i18n from '@/plugins/i18n.js'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Notification)
Vue.use(SvgIcon, {
  tagName: 'iconsvg',
  defaultWidth: '16px',
  defaultHeight: '16px',
  classPrefix: 'svg'
})

new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
