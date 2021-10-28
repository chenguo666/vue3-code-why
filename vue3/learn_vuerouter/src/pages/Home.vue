<template>
  <div>
    home
    <router-link to="/home/show">show</router-link>
    <router-link to="/home/list">list</router-link>
    <button @click="gohome">首页</button>
    <button @click="goabout">关于</button>
    <router-view></router-view>
  </div>
</template>
<script>
  import {
    useRouter
  } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const gohome = () => {
        router.push('/about')
      }
      return {
        gohome
      }
    }
  }
</script>
<style></style>