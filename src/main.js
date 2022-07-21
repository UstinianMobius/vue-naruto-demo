import Vue from 'vue'
import App from './App.vue'

import { router } from './router'

Vue.config.productionTip = false

// Vue.prototype.$Message = 123

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
