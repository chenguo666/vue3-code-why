<template>
  <div id="app">
    app组件
    <suspence>
      <template #default>
        <async-category></async-category>
      </template>
<template #fallback>
        <div>132</div>
      </template>
</suspence>
</div>
</template>
<script>
  //   import AsyncCategory from './AsyncCategory.vue'
  //   $refs $parent $root 获取对应根组件 vue3移除了$children
  import {
    defineAsyncComponent
  } from 'vue'
  const AsyncCategory = defineAsyncComponent(() =>
    import ('./AsyncCategory.vue'))
  export default {
    data() {
      return {}
    },
    components: {
      AsyncCategory
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>