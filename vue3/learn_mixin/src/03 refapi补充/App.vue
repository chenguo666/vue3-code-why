<template>
  <div>
    <input type="text" v-model="message" />
    {{ message }}
  </div>
</template>
<script>
import { ref } from 'vue'
import debounceRef from './hook/useDebounceRef.js'
export default {
  setup() {
    const message = debounceRef('hello world')
    return {
      message
    }
  }
}
</script>
<style scoped></style>
