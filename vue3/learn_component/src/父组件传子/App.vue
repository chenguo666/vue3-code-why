<template>
  <div id="app">
    <h2>当前计数{{ counter }}</h2>
    <show-message title="hah" content="xxxx"></show-message>
    <show-message title="gdsaf" content="111"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <counter-operation @add="addOne" @sub="subOne"></counter-operation>
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
    <h2>{{ content[currentIndex] }}</h2>
  </div>
</template>
<script>
  import ShowMessage from './ShowMessage.vue'
  import CounterOperation from './CounterOperation.vue'
  import tabControl from './tabControl.vue'
  export default {
    components: {
      ShowMessage,
      CounterOperation,
      tabControl
    },
    data() {
      return {
        title: 'xxxxxxxxx',
        content: 'xxxxxxxxxxxxxx',
        counter: 0,
        titles: ['衣服', '鞋子', '箱包'],
        content: ['衣服页面', '鞋子页面', '箱包页面'],
        currentIndex: 0
      }
    },
    methods: {
      addOne() {
        this.counter++
      },
      subOne() {
        this.counter--
      },
      titleClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>
<style scoped></style>