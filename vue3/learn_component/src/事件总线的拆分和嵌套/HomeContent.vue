<template>
  <div id="app">
    <h2>home-content</h2>
    {{ name }}-{{ age }}-{{ length }}
    <button @click="offit">clear off</button>
  </div>
</template>
<script>
  import emitter from './eventbus.js'
  export default {
    components: {},
    data() {
      return {}
    },
    created() {
      emitter.on('why', info => {
          console.log(info)
        })
        //   emitter.on('cobe', info => {
        //     console.log(info)
        //   })
        //   emitter.on('*', (type, info) => {
        //       console.log(type, info)
        //     })
        //
    },
    methods: {
      offit() {
        // emitter.all.clear() //取消所有的监听
        emitter.off('why', this.foo)
      },
      foo() {}
    }
  }
</script>
<style scoped></style>