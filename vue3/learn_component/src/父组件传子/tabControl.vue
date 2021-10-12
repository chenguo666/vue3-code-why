<template>
  <div class="tab-control">
    <div
      class="tab"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ['titleClick'],
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      },
      content: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>
<style scoped>
  .tab-control {
    display: flex;
  }
  
  .tab {
    flex: 1;
    text-align: center;
  }
  
  .active {
    color: red;
  }
  
  .active span {
    border-bottom: 5px solid red;
    padding: 5px 10px;
  }
</style>