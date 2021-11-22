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
// freshness 擦除
const info:Person=my
// const info:Person={
//     name:'xfasd',
//     age:18,
//     height:1.88,
//     adress:'xfasd',
// }


export {}



