<template>
  <div id="app">
    <h2>-----------App内容-----------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------App内容:Getters相关信息-----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(26) }}</h2>

    <h2>-----------App内容:info对象的内容是否是响应式-----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-----------HelloVuex内容-----------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {
  INCREMENT
 }
from './store/mutations-types'

export default {
  components: { HelloVuex },
  name: "App",
  comments: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是App组件",
    };
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter(s => {
  //       return s.age> 20
  //       })
  //   }
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // payload: 负载
      // 1.普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      const stu = { id: 14, name: "alan", age: 29 };
      this.$store.commit("addStu", stu);
    },
    updateInfo() {
      this.$store.commit('updateInfo')
    }
  },
};
</script>

<style>
</style>
