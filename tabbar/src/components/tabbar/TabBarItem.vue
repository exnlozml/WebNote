<template>
  <div class="tab-bar-item">
    <slot></slot>
    <slot></slot>

    
  </div>
</template>

<script>
export default {
  name: "TarBarItem"
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>