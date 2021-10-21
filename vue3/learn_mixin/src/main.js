import { createApp } from 'vue'
// import App from './01 mixin和extends/App.vue'
// import App from './02 componsitionApi基础/App.vue'
// import App from './03 refapi补充/App.vue'
// import App from './04 computed和watch/App.vue'
// import App from './05 生命周期/App.vue'
// import App from './06 provide和inject/App.vue'
// import App from './07 compositionapi练习/App.vue'
// import App from './08 setup顶层编写模式/App.vue'
// import App from './09 vue3组件高级/App.vue'
// import App from './10 vue自定义指令和teleport/App.vue'
import App from './11 vue插件/App.vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginsFunction from './plugins/plugins_function'
const app = createApp(App)
  // 会混入每个对象 全局的
registerDirectives(app)
app.mixin({
  data() {
    return {
      message: '00000000'
    }
  }
})
app.use(pluginObject)
app.use(pluginsFunction)
  // app.directive('focus', {
  //   mounted(el, bindings, vnode, preVnode) {
  //     console.log(111)
  //     el.focus()
  //   }
  // })
app.mount('#app')