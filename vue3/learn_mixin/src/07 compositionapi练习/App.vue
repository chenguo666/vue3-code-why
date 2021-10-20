<template>
  <div>
    {{ name }}
    {{ age }}
    {{ titleRef }}
    <button @click="inr">+</button>
    <button @click="der">-</button>
    <span> {{ scrollX }}-{{ scrollY }} </span>
    {{ data }}
  </div>
</template>
<script>
  import {
    useCounter,
    useTitle,
    useScrollPsoition,
    useLocalStorge
  } from './hooks/index.js'
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const {
        name,
        age,
        inr,
        der
      } = useCounter()
      const {
        scrollX,
        scrollY
      } = useScrollPsoition()
      const titleRef = useTitle('xxxx')
      setTimeout(() => {
        titleRef.value = 'xxxxxxxxxxxxxxxxx'
      }, 5000)
      console.log(scrollX.value)
      const data = useLocalStorge('info')

      //   const data = useLocalStorge('info', {
      //     name: 'xxx',
      //     age: 18
      //   })
      return {
        name,
        age,
        inr,
        der,
        data,
        titleRef,
        scrollX,
        scrollY
      }
    }
  }
</script>
<style></style>