import Vue from 'vue'
import App from './App.vue'
//import Ninjas from './Ninjas.vue' //Global nested component

//Vue.component('ninjas', Ninjas) //Global nested component

new Vue({
  el: '#app',
  render: h => h(App)
})
