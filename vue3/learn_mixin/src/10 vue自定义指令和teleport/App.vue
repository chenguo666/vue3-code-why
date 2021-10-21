<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数{{ count }}</h2>
      <button @click="btn">+1</button>
    </teleport>
  </div>
</template>
<script>
  import {
    ref,
    onMounted
  } from 'vue'
  export default {
    setup() {}
  }
</script>
<style></style>