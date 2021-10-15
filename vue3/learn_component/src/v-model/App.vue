<template>
  <div id="app">
    <!-- <hyinput v-model="message"></hyinput> -->
    <!-- 绑定俩个v-model -->
    <hyinput v-model="message" v-model:title="title"></hyinput>
    <h2>{{ message }}</h2>
    <!-- <hyinput :modelValue="message" @update:model-value="$event"></hyinput> -->
  </div>
</template>
<script>
  import hyinput from './hyimput.vue'
  export default {
    components: {
      hyinput
    },
    data() {
      return {
        message: 'xxx'
      }
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>