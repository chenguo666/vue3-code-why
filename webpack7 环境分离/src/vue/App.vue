<template>
  <div>
    <h2>app.vue</h2>
    <helloWorld></helloWorld>
  </div>
</template>
<script>
  import helloWorld from './helloWorld.vue'
  export default {
    components: {
      helloWorld
    },
    data() {
      return {
        title: 'asdfsadf',
        message: 'xxxxxxxxxxxxx'
      }
    },
    methods: {}
  }
</script>
<style>
  h2 {
    color: red;
  }
</style>