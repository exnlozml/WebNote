import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 1000,
  students: [{
      id: 10,
      name: 'why',
      age: 18
    },
    {
      id: 11,
      name: 'kobe',
      age: 24
    },
    {
      id: 12,
      name: 'james',
      age: 30
    },
    {
      id: 13,
      name: 'curry',
      age: 10
    }
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}



const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
   a:moduleA
  }
})

// 3.导出store对象
export default store
