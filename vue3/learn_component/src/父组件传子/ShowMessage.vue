<template>
  <div>
    {{ title }}
    {{ content }}
  </div>
</template>
<script>
  export default {
    props: ['title', 'content'],
    // inheritAttrs: false,
    data() {
      return {}
    }
  }
</script>
<style scoped></style>