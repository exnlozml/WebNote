<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="rgb(18, 150, 219)">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home-selected.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="rgb(18, 150, 219)">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/category-selected.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop" activeColor="rgb(18, 150, 219)">
        <img slot="item-icon" src="./assets/img/tabbar/shop.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/shop-selected.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/person" activeColor="rgb(18, 150, 219)">
        <img slot="item-icon" src="./assets/img/tabbar/person.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/person-selected.png" />
        <div slot="item-text">我的</div>
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
