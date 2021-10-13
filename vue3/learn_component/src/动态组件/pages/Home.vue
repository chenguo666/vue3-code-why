<template>
  <div>home</div>
  {{ name }}--{{ age }}
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Number,
        default: 0
      }
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>