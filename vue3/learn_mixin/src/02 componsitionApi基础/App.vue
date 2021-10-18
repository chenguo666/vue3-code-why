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
import { reactive, ref, readonly } from 'vue'
export default {
  // 有哪些参数 props 父组件传递过来的属性
  //有什么样的返回值

  //   isProxy 检查对象是不是由reactive或readonly创建的proxy
  //   isReactive 检查对象是不是由reactive创建的响应代理
  //   isReadonly
  //   toRaw 返回reactive或readonly代理的原始对象 谨慎使用
  //   shallowReactive 创建一个响应式代理 它跟踪其自身property的响应性
  //   shallowReadonly
  setup(props, context) {
    console.log(props, context.attrs)
    // let counter = 100
    const state = reactive({
      counter: 100
    })
    // ref的包只能是浅层解包
    let a = ref(100)
    let readonlya = readonly(a)
    let aaa = 'xxxx'
    let readaaa = readonly(aaa)
    const increment = () => {
      state.counter++
      a.value++
      readonlya.value++
      readaaa = 'xxxxxxxx'
      console.log(state.counter, a.value, readonlya.value, readaaa)
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
