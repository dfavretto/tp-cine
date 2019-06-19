import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

//Gráficos APEX
import VueApexCharts from 'vue-apexcharts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


window.axios = require('axios');


Vue.use(BootstrapVue);
Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)

new Vue({
  el: '#app',
  router,
  render: h => h(App)


})