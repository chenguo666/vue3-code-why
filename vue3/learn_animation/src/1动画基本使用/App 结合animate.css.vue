<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__flipInY "
    >
      <!-- <transition name="why" enter-active-class=""> -->
      <!-- <h2 class="title" v-if="isShow">xxxxxxxxxxxxxx</h2> -->
      <h2 class="title" v-if="isShow">xxxxxxxxxxxxxx</h2>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style scoped>
  .app {
    width: 200px;
    margin: 0 auto;
  }
  
  .title {
    display: inline-block;
  }
  
  .animate__flipInY {
    animation-direction: reverse;
  }
  /* .why-enter-active {
    animation: bounceInUp 0.5s ease-in;
  }
  
  .why-leave-active {
    animation: bounceInUp 0.5s ease-in reverse;
  } */
</style>