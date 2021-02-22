<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.png" />
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/category.png" />
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/shop.png" />
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/person.png" />
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
