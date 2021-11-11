<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <home></home>
  <div>
    app {{ $store.state.counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <!-- home:{{ $store.getters['home/homeCounterx'] }}00 -->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import home from './pages/home.vue'
  export default {
    name: 'App',
    components: {
      home
    },
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