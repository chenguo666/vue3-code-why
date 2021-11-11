<template>
  <div>
    <h2 class="title" ref="titleref">
      {{ message }}
    </h2>
  </div>
  <button @click="addmessage">+</button>
</template>

<script>
  import {
    ref,
    nextTick
  } from 'vue'
  export default {
    setup() {
      const message = ref('哈撒地方')
      const titleref = ref(null)
      const addmessage = () => {
        message.value += '哈撒地方'
        nextTick(() => {
          console.log(titleref.value.offsetHeight)
        })
      }
      return {
        message,
        addmessage,
        titleref
      }
    }
  }
</script>

<style>
  .title {
    width: 120px;
  }
</style>