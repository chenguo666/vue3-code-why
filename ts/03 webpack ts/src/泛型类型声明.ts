// 接口的实现

interface ISwim{
    swimming:()=>void
}
interface IEat{
    eating:()=>void
}
function foo(swim:ISwim){

}
// 类实现接口
class Animal{

}
// 继承只能一个 实现可以多个 
class Fish extends Animal implements ISwim,IEat{
    eating() {
        console.log('eating');
    }
    swimming () {
        console.log('swimming');
    }
}
// 编写统一公共api 面向接口编程
function swimAction(swimable:ISwim) {
    swimable.swimming()
}
// 所有实现了接口的类对应的对象 都可以传入
swimAction(new Fish())
swimAction({swimming:function(){}})

// interface 和 type 区别
// 定义非对象类型 通常推荐type
//  多个interface相同名称  会把 不同的合并

// 字面量赋值 
interface Person {
    name:string
    age:number
    height:number
}
const my ={
    name:'xfasd',
    age:18,
    height:1.88,
    adress:'xfasd',
}
// freshness 擦除 adress的值是取不到的

const info:Person=my
// const info:Person={
//     name:'xfasd',
//     age:18,
//     height:1.88,
//     adress:'xfasd',
// }

// 枚举类型
enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}
function tunrDirection(direction:Direction){

}
tunrDirection(Direction.LEFT)

// 泛型 ********************************************************************************************

function sum<Type>(num1:Type):Type{
    return num1
}
// 1.传入明确类型
sum<number>(10)
sum<{name:string}>({name:'why'})
// 2.类型推导
sum(56)

// 多个类型参数
function foox<T,E>(arg1:T,arg2:E){

}
foox<number,string>(12,'12')
// 泛型基本补充
// T type缩写
// K V key和value 键值对
// E 元素
// O object

// 泛型接口
interface IPersons<T1,T2>{
    name:T1
    age:T2
}
const ee:IPersons<string,number>={
    name:'why',
    age:123
}
class Point<T>{
    x:T
    y:T
    z:T
    constructor(x:T,y:T,z:T){
        this.x=x
        this.y=y
        this.z=z
    }
}
const es=new Point<string>('534','312','432')
export {}



