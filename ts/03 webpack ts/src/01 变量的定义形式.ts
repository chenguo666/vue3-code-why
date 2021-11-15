// ts 变量定义 类型注解
var name: string = 'why'
let age: number = 18
const height: number = 1.88

// string ts中的字符串类型 String javscript 字符串的包装类的类型
// eslint  tslint

// 没有添加类型注解 类型推断  会将赋值的值的类型作为前面的标识符的类型
let foo = 'foo'
// foo=13

let num: number = 132
num = 2332

let flag: boolean = false
flag = true

let message: string = 'xadfas'
message = 'asdasdfsdfa'
message = `asdf${num}sadf`

// array 数组
const names: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f']
// names.push(12)
names.push('x')
// 开发不推荐
const names2: string[] = ['a', 'b', 'c', 'd', 'e', 'f']

// object对象的使用
const info = {
  name: 'why',
  age: 18
}

// null和undefined
const n1: null = null
const n2: undefined = undefined

const title1 = Symbol('title')
const title2 = Symbol('title')
const infos = {
  [title1]: 'xxx',
  [title2]: 'aaa'
}

// typescript类型 any

let aaa: any = 'asdf'
aaa = 132
aaa = true

// unknowm 描述类型不确定的变量 只能赋值给any类型和unknown类型 ts3.x出现的
// any类型可以赋值给任意类型
let fa: boolean = true
let result: unknown
if (fa) {
  result = aaa
} else {
  result = info
}
// let go:string = result 会报错 any不会

// void 指定一个函数没有返回值
function sum(num1: number, num2: number): void {
  console.log(num1 + num2)
}
sum(20, 30)
// sum('sdaf', 'ga')

// never 表示永远不会发生值的类型
function fxx(): never {
  // 死循环 永远不会有返回值
  while (true) {}
}
// 有异常
function bxx(): never {
  throw new Error()
}

// tuple类型 元组类型 多种元素的集合 特定 可以知道每个类型
const infosb: [string, number, number] = ['a', 2, 3]
const namesss = infosb[0]
const namessss = infosb[1]

// 类型补充
// 函数参数类型和返回值类型

function sums(num1: number, num2: number): number {
  return num1 * num2
}
sums(1, 2)

export {}
