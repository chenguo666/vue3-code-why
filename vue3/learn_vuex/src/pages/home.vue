<template>
  <div>
    home
    <!-- {{ $store.state.counter }}-{{ sCounter }}--999{{ newCounter }} -->
    {{ scounter }}
    {{ counter }}
  </div>
</template>
<script>
  import {
    mapState,
    useStore
  } from 'vuex'
  import {
    computed
  } from 'vue'
  export default {
    setup() {
      const store = useStore()
      const scounter = computed(() => store.state.counter)

      const storeState = mapState(['counter'])
      const storeStates = {}
      Object.keys(storeState).forEach((key) => {
        const fn = storeState[key].bind({
          $store: store
        })
        storeStates[key] = computed(fn)
      })
      return {
        scounter,
        ...storeStates
      }
    }
  }
  //   export default {
  //     //   通过计算属性 简化写法
  //     computed: {
  //       sCounter() {
  //         return this.$store.state.counter
  //       },
  //       //   第一种写法
  //       //   ...mapState(['counter'])
  //       // 第二种写法
  //       ...mapState({
  //         newCounter: (state) => state.counter
  //       })
  //     }
  //   }
</script>
<style></style>