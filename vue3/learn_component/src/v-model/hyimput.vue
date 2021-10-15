<template>
  <div>
    <!-- <button @click="btn">按钮</button> -->
    <button @click="btn">按钮</button>
    <h2>---{{ modelValue }}</h2>
    <input type="text" :value="modelValue" @input="btn" />
    <!-- <input type="text" v-model="modelValue" /> 绑定props 不对滴 -->
    <input type="text" v-model="messages" />
    <input type="text" v-model="title" />
  </div>
</template>
<script>
  export default {
    components: {},
    props: {
      modelValue: String,
      title: String
    },
    data() {
      return {}
    },
    computed: {
      messages: {
        set(value) {
          this.$emit('update:modelValue', value)
        },
        get() {
          return this.modelValue
        }
      },
      title: {
        set(value) {
          this.$emit('update:title', value)
        },
        get() {
          return this.title
        }
      }
    },
    emits: ['update:modelValue'],
    created() {},
    methods: {
      btn() {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>
<style scoped></style>