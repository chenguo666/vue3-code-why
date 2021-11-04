<template>
  <!-- <button>home</button> -->
  <!-- <button>about</button> -->
  <!-- props:href 跳转的链接 route 对象 navigate 导航 isActive 是否处于活跃状态 
    isExactActive 是否当前出去精确的活跃状态
-->
  <!-- <router-link to="/home" v-slot="props" custom> -->
  <router-link to="/home" v-slot="props">
    <button>
      <!-- home 2233 {{ props.href }}--{{ props.route }}--{{ props.navigate }} -->
      home- {{ props.isActive }}
    </button>
    <button @click="props.navigate">homepn</button>
  </router-link>
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