<template>
  <div>about</div>
  <button @click="counter++">{{ counter }}</button>
</template>
<script>
  export default {
    name: 'about',
    data() {
      return {
        counter: 0
      }
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>