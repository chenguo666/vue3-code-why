class Dep {
  constructor() {
    this.subscribers = new Set()
  }
  addEffect(effect) {
    this.subscribers.add(effect)
  }
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
let activeEffect = null

function watchEffect(effect) {
  activeEffect = effect
    //   dep.depend()
  effect()
  activeEffect = null
}
// map key是字符串
// weakmap key是对象 弱引用
const targetMap = new WeakMap()

function getDep(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}
// vue2
function reactive(raw) {
  // 数据劫持
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key)
    let value = raw[key]
    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })
  return raw
}
// vue3
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, newValue) {
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify()
    }
  })
}

const dep = new Dep()

const info = reactive({ counter: 200, name: 'why' })
const foo = reactive({ height: 1.88 })
watchEffect(function() {
  console.log(info.counter * 2, info.name)
})
watchEffect(function() {
  console.log(info.counter * info.counter)
})
watchEffect(function() {
  console.log(info.counter * 10, info.name)
})
watchEffect(function() {
    console.log(foo.height)
  })
  // info.counter++

//   dep.notify()

info.name = 'chan'
foo.height = 4
  // dep.notify()