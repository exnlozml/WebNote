<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试11</li>
      <li>测试12</li>
      <li>测试13</li>
      <li>测试14</li>
      <li>测试15</li>
      <li>测试16</li>
      <li>测试17</li>
      <li>测试18</li>
      <li>测试19</li>
      <li>测试20</li>
      <li>测试21</li>
      <li>测试22</li>
      <li>测试23</li>
      <li>测试24</li>
      <li>测试25</li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  // 组件创建完之后调用
  mounted() {
    // 1.创建BetterScroll对象
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        click: true,
      });

      // 2.监听滚动的位置
      this.scroll.on("scroll", (position) => {
        console.log(position);
      });

      // 3.监听上拉事件
      this.scroll.on("pullingUp", () => {
        console.log("上拉加载更多");
      });
    });
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
  },
};
</script>

<style>
.wrapper {
  height: 250px;
  background: red;

  overflow: hidden;
}
</style>