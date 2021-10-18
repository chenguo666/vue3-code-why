import { createApp } from 'vue'
// import App from './01 mixin和extends/App.vue'
import App from './02 componsitionApi基础/App.vue'

const app = createApp(App)
// 会混入每个对象 全局的
app.mixin({
  data() {
    return {
      message: '00000000'
    }
  }
})
app.mount('#app')
