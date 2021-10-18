<template>
  <div>
    home
    <h2>{{ title }}</h2>
    <h2>{{ content }}</h2>
  </div>
</template>
<script>
import basepage from './BasePage.vue'
export default {
  // 用的极少
  extends: basepage,
  data() {
    return {
      content: 'hello home'
    }
  }
}
</script>
<style scoped></style>
