import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import './plugins'

import octaviaKit from '@/plugins/octavia.kit'
import * as filters from './filter/filter'

Vue.use(octaviaKit)
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 개발모드로 시작할 경우 추가로 실행할 부분
// if (process.env.NODE_ENV === "development") {}

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
