<template>
  <div>{{ name }}={{ age }}</div>
  <button @click="cname">cname</button>
  <button @click="cage">cage</button>
</template>
<script>
import { ref, computed, watchEffect, watch } from 'vue'
export default {
  setup() {
    //    watchEffect 会自动收集响应式的依赖
    const name = ref('a')
    const age = ref(18)
    const stop = watchEffect(onInvalidate => {
      const timer = setTimeout(() => {
        console.log('ok')
      }, 2000)
      //   console.log(onInvalidate)
      onInvalidate(() => {
        //   在这个函数中清楚额外的副作用
        // request.cancel()
        clearTimeout(timer)
        console.log('onInvalidate')
      })
      console.log('watchEffect', name.value, age.value)
    })
    const cname = () => {
      name.value = 'kobe'
    }
    const cage = () => {
      age.value++
      if (age.value > 25) {
        //   停止侦听
        stop()
      }
    }

    return {
      name,
      age,
      cname,
      cage
    }
  }
}
</script>
<style scoped></style>
