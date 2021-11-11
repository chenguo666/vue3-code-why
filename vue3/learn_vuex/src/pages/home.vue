<template>
  <h1>home:{{ $store.state.counter }}</h1>
  {{ $store.state.rootCounter }}
  {{ $store.state.home.homeCounter }}
  {{ $store.state.user.userCounter }}
  <br />
  <button @click="addit">+</button>
  <!-- <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementAction">==+</button> -->
  <!-- home:{{ $store.getters['home/homeCounterx'] }}00 -->
</template>
<script>
  import {
    useStore
  } from 'vuex'
  import {
    onMounted
  } from 'vue'
  export default {
    setup() {
      const store = useStore()
      onMounted(() => {
        store.commit('rootIncrement')
      })
      const addit = () => {
        store.commit('rootIncrement')
      }
      return {
        addit
      }
    }
  }
</script>
<style></style>