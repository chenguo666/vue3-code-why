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
    while (true) { }
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

// 对象类型 ?表示可选 本质上是undefined 的联合类型

// function printPoint(point: { x: number; y: number; z: number|undefined }) {
function printPoint(point: { x: number; y: number; z?: number }) {
    console.log(point.x, point.y)
}
printPoint({ x: 10, y: 20 })
printPoint({ x: 10, y: 20, z: 21 })

// 联合类型 使用的时候要特别小心
function printID(id: number | string) {
    // narrow 缩小
    console.log(id)
}
// 可选类型和联合类型

// 类型 别名 type(type alias) 用于定义类型别名
type UnionType = string | number | boolean
function printiid(id: UnionType) {
    console.log(id)
}

// 类型断言 as
const el = document.getElementById('why') as HTMLElement

const messagexx = 'adfasd'
const numxx: number = messagexx as any as number

// 非空类型断言 !
function printMessage(message?: string) {
    console.log(message!.length)
}
// 可选链 ?. 当对象的属性不存在就会返回 undefined
type Person = {
    name: string
    friend?: {
        name: string
        age?: number
    }
}
const infosome: Person = {
    name: 'why',
    friend: {
        name: 'kobe'
    }
}
console.log(infosome?.friend?.age)

// ?? !!
// !! 将其他类型转化为boolean类型
const messagesx = 'asdf'
const falgg = Boolean(messagesx)
const flagg = !!messagesx //true
// ?? 空值合并操作符 es11逻辑操作符 当操作符左边是null或者undefined时 返回右侧操作数 否则返回左侧

let messg: string | null = 'sadf'
const contetnt = messg ?? 'heheh'
// const contetnt=messg?messg:'heheh'

// 字面量核心  值和类型要保持一致 字面量的意义就是必须结合联合类型使用
const messagees: 'xxx' = 'xxx'
const align: 'left' | 'right' | 'center' = 'left'
// align = 'right'
// align = 'center'

// 类型缩小 type narrowing
// 常见的类型保护
// typeof
type idyupes = number | string
function printitID(id: idyupes) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
// 平等缩小 === !==
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
    if (direction === 'left') {
        console.log(direction)
    }
}
// instanceof

function printTime(time: string | Date) {
    if (time instanceof Date) {
        console.log(time.toUTCString())
    }else {
        console.log(time)
    }
}

// in
type Fish={
    // 函数类型
    swimming:()=>void
}
type Dog={
    running:()=>void
}

function walk(animal:Fish|Dog){
    if ('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
}
const fish:Fish={
    swimming(){
        console.log('swimming');
        
    }
}
walk(fish)


export { }
