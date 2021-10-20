<template>
  <div>
    123
    {{ counter }}
    <button @click="increment">+</button>
  </div>
</template>
<script setup>
  import {
    ref
  } from 'vue'
  const counter = ref(0)
  const increment = () => {
    counter.value++
  }
</script>
<style></style>