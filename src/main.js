import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {GetAllArticles} from './api'
const data = GetAllArticles()
console.log(data)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
