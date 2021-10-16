<template>
  <div class="app">
    <input type="number" v-model="count" step="100" />
    <h2>{{ showCount }}</h2>
  </div>
</template>
<script>
  import gsap from 'gsap'
  export default {
    data() {
      return {
        count: 0,
        showNumber: 0
      }
    },
    computed: {
      showCount() {
        return this.showNumber.toFixed(0)
      }
    },
    watch: {
      count(newValue, oldValue) {
        gsap.to(this, {
          duration: 1,
          showNumber: newValue
        })
      }
    }
  }
</script>
<style scoped></style>