<template>
  <!-- <button>home</button> -->
  <!-- <button>about</button> -->
  <!-- props:href 跳转的链接 route 对象 navigate 导航 isActive 是否处于活跃状态 
    isExactActive 是否当前出去精确的活跃状态 地址url有子路由的时候
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
  <router-link to="/category">动态路由</router-link>
  <router-link to="/home/second">动态二级路由</router-link>

  <router-view v-slot="props">
    <!-- appear初次使用也有效果  mode 动画模式-->
    <transition name="why" mode="out-in" :appear="true">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
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
  
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
  
  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }
</style>