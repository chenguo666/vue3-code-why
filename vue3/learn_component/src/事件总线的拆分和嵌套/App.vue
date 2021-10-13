<template>
  <div id="app">
    <h2>事件总线</h2>
    <home></home>
    <about></about>
  </div>
</template>
<script>
  import Home from './Home.vue'
  import About from './About.vue'
  import {
    computed
  } from 'vue'
  export default {
    components: {
      Home,
      About
    },
    data() {
      return {
        names: ['a', 'b', 'c']
      }
    },
    created() {
      a()
    },
    methods: {
      add() {
        this.names.push('d')
      }
    }
  }

  function a() {
    console.log('a')
  }
</script>
<style scoped></style>