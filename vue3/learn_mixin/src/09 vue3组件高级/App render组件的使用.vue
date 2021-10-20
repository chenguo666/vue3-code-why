<script>
  import {
    h,
    ref
  } from 'vue'
  import hello from './hello.vue'
  export default {
    setup() {
      const counter = ref(0)
      return () => {
        return h(hello, {}, '')
      }
    }
  }
</script>
<style></style>