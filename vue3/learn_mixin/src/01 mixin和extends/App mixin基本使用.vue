<template>
  <div>
    <h3>{{ message }}</h3>
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
import { demoMixin } from './mixins/demoMixin.js'
export default {
  data() {
    return {
      title: 'title'
    }
  },
  mixins: [demoMixin]
}
</script>
<style scoped></style>
