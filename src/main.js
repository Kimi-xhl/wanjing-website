import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//svg
import '@/icons'
//wow
import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
import VueScroll from "@david-j/vue-j-scroll";

import {
  Form,
  FormItem,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(VueScroll);
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)

Vue.config.productionTip = false
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$wow=wow

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
