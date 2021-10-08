import './js/element'
// import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createApp } from 'vue'
import App from './vue/App.vue'
import axios from 'axios'
console.log(667776111)

// vue代码
// const app = createApp({
//   template: `#my-app`,
//   data() {
//     return {
//       title: 'asdfasdf'
//     }
//   }
// })
if (module.hot) {
  module.hot.accept('./js/element.js'),
    () => {
      console.log('模块发生更新！')
    }
}
const app = createApp(App)
app.mount('#app')