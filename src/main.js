import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/index.scss'
import router from '@/plugins/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  ...App,
  router
}).$mount('#app')
