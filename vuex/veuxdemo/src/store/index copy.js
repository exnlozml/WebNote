import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
import {
  INCREMENT
} from './mutations-types';

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

const store = new Vuex.Store({
  state: {
    // 这些属性都会被加入到响应式系统中
    // 而响应式系统会监听属性的变化
    // 当熟悉发生变时
    // 会通知所有界面中用到该属性的地方, 让界面发生刷新
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
  },
  mutations: { // 不能是异步的,devtool监听不到,必须使用action
    // 方法
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, payload) {
      state.counter += payload.count
      // console.log(count);
    },
    addStu(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'codewhy'

      // 错误代码. 不能在这里进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'codewhy'
      // }, 1000)

      // 给info增加address属性(不是响应式)
      // state.info['address'] = '洛杉矶'

      // Vue.set() 响应式
      // Vue.set(state.info, 'address', '洛杉矶')

      // 删除age属性(不是响应式)
      // delete state.info.age

      // Vue.delete() 响应式
      Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context: 上下文
    // aupdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // },

    aupdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('111')
        }, 1000);
      })
    }

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function(age) {
      //   return state.students.filter( s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store

// 对象的结构 
const obj = {
  name: 'why',
  age: 16,
  height: 1.88
}

const {name, height, age} =obj;
console.log(name);
