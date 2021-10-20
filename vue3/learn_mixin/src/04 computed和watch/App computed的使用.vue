<template>
  <div>{{ firstName }}-{{ lastName }}</div>
  <h2>{{ fullName }}</h2>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('kobe')
    const lastName = ref('xxx')
    const fullName = computed(() => {
      return firstName.value + lastName.value
    })
    return {
      firstName,
      lastName,
      fullName
    }
  }
}
</script>
<style scoped></style>
