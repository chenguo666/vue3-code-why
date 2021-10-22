class Dep {
  constructor() {
    this.subscribers = new Set()
  }
  addEffect(effect) {
    this.subscribers.add(effect)
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
console.log(123)

const dep = new Dep()

const info = { counter: 200 }

function doubleCounter() {
  console.log(info.counter * 2)
}
dep.addEffect(doubleCounter)

function powerCounter() {
  console.log(info.counter * info.counter)
}
dep.addEffect(powerCounter)
  // doubleCounter()
info.counter++
  //   doubleCounter()
  dep.notify()