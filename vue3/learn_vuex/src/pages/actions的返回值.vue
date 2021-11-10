<template>
  <h1>home:{{ $store.state.counter }}</h1>
  <br />
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementAction">==+</button>
</template>
<script>
  import {
    useStore,
    mapMutations,
    mapActions
  } from 'vuex'

  import {
    onMounted
  } from 'vue'
  import {
    INCREMENT_N
  } from '../store/mutations-types.js'
  export default {
    setup() {
      const store = useStore()
      const storeMutations = mapMutations(['increment', 'decrement'])
      const storeActions = mapActions(['incrementAction'])
      onMounted(() => {
        const promise = store.dispatch('promiseit')
        promise.then((res) => {
          console.log('res', res)
        })
        store.dispatch('incrementAction')
      })
      return {
        ...storeMutations,
        ...storeActions
      }
    }
  }
</script>
<style></style>