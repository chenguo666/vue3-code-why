<template>
  <div>show names</div>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot name="why" :item="item" :index="index"></slot>
    </template>
<!-- <span> -->
<!-- {{ item }} -->
<!-- </span> -->
</div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      names: Array,
      default: () => []
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>