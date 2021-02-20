<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{ name }}</p>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: "hello webpack",
      name: "codewhy",
    };
  },
  methods: {
    btnClick() {
      console.log("我是Webpack");
    },
  },
};
</script>

<style scoped>
.title {
  color: green;
}
</style>
