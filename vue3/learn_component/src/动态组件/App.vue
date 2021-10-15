<template>
  <div id="app">
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemclick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>
    <!-- 1 -->
    <!-- <template v-if="currentTab === 'home'">
      <home />
    </template>
<template v-else-if="currentTab === 'about'">
      <about />
    </template>
<template v-else>
      <category />
    </template> -->
<!-- 2 动态组件-->
<!-- <component :is="currentTab" name="xxx" :age="18"></component> -->
<keep-alive include="about">
  <component :is="currentTab"></component>
</keep-alive>
</div>
</template>
<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  import Category from './pages/Category.vue'
  export default {
    data() {
      return {
        tabs: ['home', 'about', 'category'],
        currentTab: 'home'
      }
    },
    components: {
      Home,
      About,
      Category
    },
    created() {},
    methods: {
      itemclick(item) {
        this.currentTab = item
      }
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
  }
</script>
<style scoped>
  .active {
    color: red;
  }
</style>