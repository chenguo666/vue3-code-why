<template>
  <div>home</div>
</template>
<script>
  import {
    onMounted,
    inject,
    readonly
  } from 'vue'
  export default {
    setup() {
      const name = inject('name')
      const counter = inject('counter')
      console.log('home', readonly(name))
      console.log('counter', readonly(counter))
    }
  }
</script>
<style></style>