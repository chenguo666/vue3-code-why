const homeModules = {
  // 命名空间
  namespace: true,

  state: {
    homeCounter: 100
  },
  getters: {
    homeCounterx(state) {
      return state.homeCounter * 2
    }
  },
  mutations: {},
  actions: {}
}
export default homeModules