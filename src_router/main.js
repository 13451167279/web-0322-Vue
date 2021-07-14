import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
