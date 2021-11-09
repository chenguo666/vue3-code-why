<template>
  <h1>{{ $store.getters.totalPrice }}</h1>
  s 99{{ totalPrice }}
  <!-- {{ nameInfo }} -->
</template>
<script>
  //   import {
  //     computed
  //   } from 'vue'
  //   import {
  //     //   mapGetters,
  //     useStore
  //   } from 'vuex'
  import {
    useGetters
  } from '../hooks/useGetters.js'
  export default {
    setup() {
      //   const store = useStore()
      //   const nameInfo = computed(() => store.getters.totalPrice)
      const storeGetters = useGetters(['totalPrice'])

      return {
        // nameInfo
        ...storeGetters
      }
    }
  }
</script>
<style></style>