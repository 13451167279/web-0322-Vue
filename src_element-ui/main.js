import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
  },
  render: h => h(App)
}).$mount('#app')
