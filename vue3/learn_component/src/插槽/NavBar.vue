<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="right">
      <slot :name="name"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      name: String
    },
    created() {},
    methods: {}
  }
</script>
<style scoped>
  .nav-bar {
    display: flex;
  }
  
  .left .right {
    width: 80px;
    background: red;
  }
  
  .center {
    flex: 1;
    background: blue;
  }
  
  .left .right .center {
    height: 44px;
  }
</style>