// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}

new Vue({
  el: '#app',
  components: { 
    cpn
  },
  render: function(createElement){
    // 1.普通用法createElement('标签', {标签的属性}, [''])
    // return createElement('h2', 
    //   {class:'box'},
    //   ['hello world', createElement('button', ['按钮'])])

    // 2.传入组件对象
    // return createElement(cpn)
    return createElement(App)
  }
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtime-only(v2)(1.性能更高 2.下面的代码量更少)
// render -> vdom -> UI