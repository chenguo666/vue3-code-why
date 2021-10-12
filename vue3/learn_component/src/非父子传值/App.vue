<template>
  <div id="app">
    <h2>非父子传参</h2>
    <button @click="add">+</button>
    <home></home>
  </div>
</template>
<script>
  import Home from './Home.vue'
  import {
    computed
  } from 'vue'
  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: 'why',
        age: 18,
        length: computed(() => this.names.length)
      }
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