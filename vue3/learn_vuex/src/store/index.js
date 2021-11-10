import { createStore } from 'vuex'
import { INCREMENT_N } from './mutations-types'
export default createStore({
  state: {
    counter: 0,
    books: [{
        name: '输入gfd',
        price: 200,
        count: 3
      },
      {
        name: '输入af',
        price: 400,
        count: 4
      },
      {
        name: '输入gfd',
        price: 600,
        count: 5
      }
    ],
    discount: 0.6
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.price * book.count
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    [INCREMENT_N](state, n) {
      state.counter += n
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    incrementAction(context) {
      // 可以执行异步操作 调用接口之类
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  modules: {}
})