<template>
  <div id="app">
    <show-message title="hah" content="xxxx"></show-message>
    <show-message title="gdsaf" content="111"></show-message>
    <show-message :title="title" :content="content"></show-message>
  </div>
</template>
<script>
  import ShowMessage from './ShowMessage.vue'
  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: 'xxxxxxxxx',
        content: 'xxxxxxxxxxxxxx'
      }
    }
  }
</script>
<style scoped></style>