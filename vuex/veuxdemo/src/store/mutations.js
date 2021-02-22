import {
  INCREMENT
} from './mutations-types'

export default { // 不能是异步的,devtool监听不到,必须使用action
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
}