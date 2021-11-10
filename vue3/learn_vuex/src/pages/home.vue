<template>
  <h1>home:{{ $store.state.counter }}</h1>
  <br />
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
<script>
  import {
    useStore,
    mapMutations
  } from 'vuex'
  import {
    INCREMENT_N
  } from '../store/mutations-types.js'
  export default {
    setup() {
      const store = useStore()
      const storeMutations = mapMutations(['increment', 'decrement'])
      return {
        ...storeMutations
      }
    }
  }
</script>
<style></style>