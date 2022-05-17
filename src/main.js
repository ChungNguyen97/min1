import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import {store} from './store/store'
import router from './router'
Vue.config.productionTip = false

=======
import { store } from './store/store'
import router from './router'
Vue.config.productionTip = false
>>>>>>> feature/collection_feature
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
