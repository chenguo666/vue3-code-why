<template lang="">
  <div></div>
</template>
<script>
  import {
    onMounted,
    onUpdated
  } from 'vue'
  export default {
    setup() {
      // onMounted() {
      //     console.log(13);
      //   }
      onMounted(() => {
        console.log(132)
      })
      onMounted(() => {
        console.log(132666)
      })
      onUpdated(() => {
        console.log('onUpdated')
      })
    }
  }
</script>
<style></style>