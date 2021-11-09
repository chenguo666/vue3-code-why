<template>
  <div>home</div>
  {{ counter }}
</template>
<script>
  import {
    useState
  } from '../hooks/useState.js'
  export default {
    setup() {
      const storeState = useState(['counter'])
      return {
        ...storeState
      }
    }
  }
</script>
<style></style>