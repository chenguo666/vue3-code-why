<template>
  <div>
    <button @click="toggle">显示/隐藏</button>
    <transition name="why">
      <h2 v-if="isShow">hello world</h2>
    </transition>
    <!-- 
实现原理：
1.自动嗅探目标元素是否应用了css过渡或者动画 如果有 那么在恰当的时机添加/删除css类名
2.如果transition 组件提供了javascript钩子函数 这些钩子函数将在恰当的时机被调用
2.如果没有找到javascript钩子并且也没有检测css过渡/动画 dom插入 删除操作将会立即执行
     -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style scoped>
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
  
  .why-enter-to,
  .why-leave-from {
    opacity: 1;
  }
  
  .why-enter-active,
  .why-leave-active {
    transition: opacity 2s ease;
  }
</style>