<template>
  <div>app<home></home></div>
</template>
<script>
  import {
    onMounted,
    provide
  } from 'vue'
  import home from './Home.vue'
  //   单项数据流
  export default {
    components: {
      home
    },
    setup() {
      const name = 'xxxx'
      let counter = 100
      provide('name', name)
      provide('counter', counter)
    }
  }
</script>
<style></style>