<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    // emits: ['add', 'sub'],
    emits: {
      add: null,
      sub: null
    },
    methods: {
      increment() {
        console.log('+')
        this.$emit('add')
      },
      decrement() {
        console.log('-')
        this.$emit('sub')
      }
    }
  }
</script>
<style scoped></style>