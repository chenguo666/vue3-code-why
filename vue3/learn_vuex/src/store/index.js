import { createStore } from 'vuex'
import homeModules from './modules/home'
import userModules from './modules/user'
export default createStore({
  state: {
    rootCounter: 0,
    counter: 0
  },
  mutations: {
    rootIncrement(state) {
      state.rootCounter++
    },
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  modules: {
    home: homeModules,
    user: userModules
  }
})