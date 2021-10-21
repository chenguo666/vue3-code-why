<template>
  <div>
    <h2 v-time>{{ timestamp }}</h2>
  </div>
</template>
<script>
  import {
    ref,
    onMounted
  } from 'vue'
  export default {
    // directives: {
    //   time: {
    //     mounted(el, bindings, vnode, preVnode) {
    //       console.log(bindings, vnode.children[0].children)
    //     }
    //   }
    // },
    setup() {
      const timestamp = 1624452193
      return {
        timestamp
      }
    }
  }
</script>
<style></style>