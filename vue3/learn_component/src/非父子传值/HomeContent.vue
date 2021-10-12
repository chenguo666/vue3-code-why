<template>
  <div id="app">
    <h2>home-content</h2>
    {{ name }}-{{ age }}-{{ length }}
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    inject: ['name', 'age', 'length'],
    methods: {}
  }
</script>
<style scoped></style>