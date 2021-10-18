<template>
  <div>
    xxxxxxx
    {{ counter }}
    {{ double }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
export default {
  // 有哪些参数 props 父组件传递过来的属性
  //有什么样的返回值
  setup(props, context) {
    console.log(props, context.attrs)
  }
}
</script>
<style scoped></style>
