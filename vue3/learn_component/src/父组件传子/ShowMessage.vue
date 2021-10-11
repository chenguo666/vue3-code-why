<template>
  <div>
    {{ title }}
    {{ content }}
  </div>
</template>
<script>
  export default {
    props: ['title', 'content'],
    data() {
      return {}
    }
  }
</script>
<style scoped></style>