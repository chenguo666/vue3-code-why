<template>
  <div class="app">
    <button @click="add">添加数字</button>
    <button @click="remove">删除数字</button>
    <button @click="shuffleNum">数字打乱</button>
    <transition-group tag="p" name="why">
      <span v-for="item in number" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>
<script>
  import gsap from 'gsap'
  import _ from 'lodash'
  export default {
    data() {
      return {
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numberCounter: 10
      }
    },
    methods: {
      add() {
        // this.number.push(this.numberCounter++)
        this.number.splice(this.randomIndex(), 0, this.numberCounter++)
      },
      remove() {
        this.number.splice(this.randomIndex(), 1)
      },
      shuffleNum() {
        this.number = _.shuffle(this.number)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.number.length)
      }
    }
  }
</script>
<style scoped>
  .item {
    margin-right: 10px;
    display: inline-block;
  }
  
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .why-enter-active,
  .why-leave-active {
    transition: all 1s ease;
  }
  
  .why-leave-active {
    position: absolute;
  }
  
  .why-move {
    transition: transform 1s ease;
  }
</style>