<template>
  <div>
    {{ counter }}
    {{ double }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  },
  computed: {
    double() {
      return this.counter * 2
    }
  }
}
</script>
<style scoped></style>
