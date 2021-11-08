<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    {{ counter }}--{{ $store.state.counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
    //   components: {
    //     HelloWorld
    //   }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>