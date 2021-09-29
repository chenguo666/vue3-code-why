const App = {
  template: '#my-app',
  data() {
    return {
      books: [{
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.09,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.09,
          count: 1
        },
        {
          id: 3,
          name: '《大话西游》',
          date: '2001-2',
          price: 159.09,
          count: 9
        },
        {
          id: 3,
          name: '《陈果说》',
          date: '2021-10',
          price: 1959.09,
          count: 1
        }
      ],
      disbtn: true
        //   money: 0
    }
  },
  created() {
    // this.getmeney()
  },
  computed: {
    money() {
      let money = 0
      this.books.forEach((el) => {
          money += el.price * el.count
        })
        //   return '￥' + money.toFixed(2)
      return money.toFixed(2)
    },
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item)
        newItem.price = '￥' + newItem.price
        return newItem
      })
    }
  },
  methods: {
    // getmeney() {
    //   this.money = 0
    //   this.books.forEach((el) => {
    //     this.money += el.price * el.count
    //   })
    //   this.money = this.money.toFixed(2)
    // },
    increment(index) {
      this.books[index].count++
        //   this.getmeney()
    },
    decrement(index) {
      this.books[index].count--
        //   this.getmeney()
    },
    remove(index) {
      this.books.splice(index, 1)
        //   this.getmeney()
    },
    formatPrice(price) {
      return '￥' + price
    }
  }
}
Vue.createApp(App).mount('#app')