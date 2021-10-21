<template>
  <!-- <div><input type="text" ref="input" /></div> -->
  <div>
    <input type="text" v-focus />
    <button v-chan.aaa="'xxx'">++++</button>
  </div>
</template>
<script>
  import {
    ref,
    onMounted
  } from 'vue'
  export default {
    //   自定义指令 与其生命周期
    directives: {
      chan: {
        created(el, bindings, vnode, preVnode) {
          console.log('bindings', bindings)
        }
      },
      focus: {
        created() {
          console.log('created')
        },
        mounted(el, bindings, vnode, preVnode) {
          console.log('mounted')
          el.focus()
        }
      }
    },
    setup() {
      //   const input = ref(null)
      //   onMounted(() => {
      //     console.log(input.value)
      //     input.value.focus()
      //   })
      //   return {
      //     input
      //   }
    }
  }
</script>
<style></style>