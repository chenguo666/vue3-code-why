<template>
  <div>
    {{ name }}
    --{{ age }}
    <button @click="change">cg</button>
  </div>
</template>
<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'why',
      age: 10
    })
    // toRefs 将reactive对象中的所有属性转成ref 建立连接
    // let { name, age } = toRefs(info)
    // toRef 将其中一个属性转成ref 建立连接
    //  unref  val = isRef(val)? val.value:val
    let { name } = info
    let age = toRef(info, 'age')
    const change = () => {
      age.value++
    }
    return {
      name,
      age,
      change
    }
  }
}
</script>
<style scoped></style>
