<template>
  <!-- <button>home</button> -->
  <!-- <button>about</button> -->
  <router-link to="/home">home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/user/abc">user</router-link>
  <router-link to="/xxx">uxxx</router-link>
  <router-view></router-view>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
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
  
  .router-link-active {
    color: red;
  }
</style>