<template>
  <div id="app">
    <h2>插槽</h2>
    <nav-bar :name="name">
      <template v-slot:left>
        <button>《</button>
      </template>
<template v-slot:center>
        <button>=</button>
      </template>
<template #right>
        <button>》</button>
      </template>
<!-- v-slot: 缩写是 # -->
<template #[name]>
        <button>name</button>
      </template>
</nav-bar>
<my-slot-cpn>
  666666
</my-slot-cpn>
<my-slot-cpn>
  <h2>2</h2>
  <h2>3</h2>
  <h2>4</h2>
</my-slot-cpn>
</div>
</template>
<script>
  import MySlotCpn from './MySlotCpn.vue'
  import NavBar from './NavBar.vue'
  import {
    computed
  } from 'vue'
  export default {
    components: {
      MySlotCpn,
      NavBar
    },
    data() {
      return {
        name: 'xxx'
      }
    },
    created() {},
    methods: {}
  }
</script>
<style scoped></style>