import Vue from 'vue'
import App from './App'
import router from './router'

import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Store from './store/index.js'

import axios from 'axios'
Vue.prototype.$axios = axios

import mock from './mock.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})

Vue.filter('getYMD', function (input) {
  return input.split(' ')[0]
})

// router.beforeEach((to, from, next) => {
//   if (to) {
//     console.log(to)
//   } else {
//     next()
//   }
// })
