<script>
  import {
    h,
    ref
  } from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      return () => {
        return h('h2', {}, 'xxxxxxxxxxx')
      }
    }
  }
</script>
<style></style>