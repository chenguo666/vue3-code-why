<template>
  <div>
    xxxxxxx
    {{ message }}
    {{ state.counter }}
    aa{{ a }}aa
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  // 有哪些参数 props 父组件传递过来的属性
  //有什么样的返回值
  setup(props, context) {
    console.log(props, context.attrs)
    // let counter = 100
    const state = reactive({
      counter: 100
    })
    let a = ref(100)
    const increment = () => {
      state.counter++
      a.value++
      console.log(state.counter, a.value)
    }
    return {
      message: 'xxxxxx',
      state,
      a,
      increment
    }
  }
}
</script>
<style scoped></style>
