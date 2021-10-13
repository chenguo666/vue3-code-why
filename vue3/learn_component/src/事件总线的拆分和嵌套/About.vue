<template>
  <div id="app">
    <h2>about</h2>
    <button @click="abouyt">abouyt</button>
  </div>
</template>
<script>
  import emitter from './eventbus.js'
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {
      abouyt() {
        console.log('about')
        emitter.emit('why', {
          name: 'why',
          age: 18
        })
      }
    }
  }
</script>
<style scoped></style>