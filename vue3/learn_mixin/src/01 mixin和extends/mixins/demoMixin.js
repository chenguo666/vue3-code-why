export const demoMixin = {
  data() {
    return {
      message: 'hello world'
    }
  },
  methods: {
    foo() {
      console.log('foo')
    }
  },
  created() {
    this.foo()
  }
}
