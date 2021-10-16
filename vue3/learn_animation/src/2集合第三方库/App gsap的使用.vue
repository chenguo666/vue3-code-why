<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
      <h2 class="title" v-if="isShow">xxxxxxxxxxxxxx</h2>
    </transition>
  </div>
</template>
<script>
  import gsap from 'gsap'
  export default {
    data() {
      return {
        isShow: true,
        distance: 200
      }
    },
    methods: {
      beforeEnter() {
        console.log('beforeEnter')
      },
      enter(el, done) {
        gsap.from(el, {
          scale: 0,
          x: this.distance,
          onComplete: done
        })
        console.log('enter')
      },
      afterEnter() {
        console.log('afterEnter')
      },
      beforeLeave() {
        console.log('beforeLeave')
      },
      leave(el, done) {
        gsap.to(el, {
          scale: 0,
          x: this.distance,
          onComplete: done
        })
        console.log('leave')
      },
      afterLeave() {
        console.log('afterLeave')
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
</style>