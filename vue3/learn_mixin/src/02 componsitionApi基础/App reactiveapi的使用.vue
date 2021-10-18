<template>
  <div>
    xxxxxxx
    {{ message }}
    {{ state.counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  // 有哪些参数 props 父组件传递过来的属性
  //有什么样的返回值
  setup(props, context) {
    console.log(props, context.attrs)
    // let counter = 100
    const state = reactive({
      counter: 100
    })
    const increment = () => {
      state.counter++
      console.log(state.counter)
    }
    return {
      message: 'xxxxxx',
      state,
      increment
    }
  }
}
</script>
<style scoped></style>
