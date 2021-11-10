<template>
  <h1>home:{{ $store.state.counter }}</h1>
  <br />
  <button @click="$store.commit('increment')">+</button>
  <button @click="$store.commit('incrementn', 10)">+10</button>
  <button @click="addH">+100</button>
  <button @click="$store.commit('decrement')">-</button>
</template>
<script>
  import {
    useStore
  } from 'vuex'
  import {
    INCREMENT_N
  } from '../store/mutations-types.js'
  export default {
    setup() {
      const store = useStore()
      const addH = () => {
        store.commit(INCREMENT_N, 100)
      }
      return {
        addH
      }
    }
  }
</script>
<style></style>