import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 那么 .vue文件中的templete是由谁处理的?
// 是由vue-templete-compiler处理
// render -> vdom -> UI