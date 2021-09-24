import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//svg
import '@/icons'
//wow
import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'

Vue.config.productionTip = false
Vue.prototype.$wow=wow

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')