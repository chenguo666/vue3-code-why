import './js/element'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './vue/App.vue'
console.log(666)

// vue代码
// const app = createApp({
//   template: `#my-app`,
//   data() {
//     return {
//       title: 'asdfasdf'
//     }
//   }
// })
const app = createApp(App)
app.mount('#app')