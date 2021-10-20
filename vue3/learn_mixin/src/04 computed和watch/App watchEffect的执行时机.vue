<template>
  <div>
    <h2 ref="title">hahah</h2>
  </div>
</template>
<script>
import { ref, computed, watchEffect, watch } from 'vue'
export default {
  setup() {
    const title = ref(null)
    watchEffect(
      () => {
        console.log(title.value)
      },
      {
        flush: 'post'
      }
    )
    return {
      title
    }
  }
}
</script>
<style scoped></style>
