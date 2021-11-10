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
    }
  },
  modules: {
    home: homeModules,
    user: userModules
  }
})