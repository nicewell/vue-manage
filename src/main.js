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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})