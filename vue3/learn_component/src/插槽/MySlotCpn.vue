<template>
  <div id="app">
    <div>我是插槽</div>
    <slot></slot>
    <div>哈哈哈</div>
  </div>
</template>
<script>
  import {
    computed
  } from 'vue'
  export default {
    data() {
      return {}
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>