import _ from '../node_modules/lodash-es/lodash.default.js'
import { sum } from './js/main.js'
import { createApp } from 'vue'
import App from './vue/App.vue'
console.log('hello world')
console.log(sum(20, 30))
console.log(_.join(['asdf', 'gdf'], '-'))
createApp(App).mount('#app')