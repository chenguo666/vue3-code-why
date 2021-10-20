<template>
  <div>
    {{ info.name }}-{{ info.friend.name }}
    <button @click="changeData">修改数据</button>
  </div>
</template>
<script>
import { ref, reactive, computed, watchEffect, watch } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'why',
      age: 18,
      friend: {
        name: 'kobe'
      }
    })
    watch(
      info,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      {
        deep: true
      }
    )
    const changeData = () => {
      info.friend.name = 'xxx'
    }
    return {
      changeData,
      info
    }
  }
}
</script>
<style scoped></style>
