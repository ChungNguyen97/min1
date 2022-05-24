import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import { store } from './store'
import Notification from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Notification)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
