<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数{{ count }}</h2>
      <button @click="btn">+1</button>
    </teleport>
  </div>
</template>
<script>
  // 插件会有俩种编写方式
  // 对象类型：一个对象 但必须包含一个install函数 该函数会在安装插件时执行
  // 函数类型：一个function 这个函数会在安装插件时自动执行
  import {
    ref,
    onMounted,
    getCurrentInstance
  } from 'vue'
  export default {
    // mounted() {
    //   console.log(this.name)
    // },
    setup() {
      const instance = getCurrentInstance()
      console.log(instance.appContext.config.globalProperties.name)
    }
  }
</script>
<style></style>