<template lang="">
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>
<script>
export default {
  name: "HelloVuex"
}
</script>
<style lang="">
  
</style>