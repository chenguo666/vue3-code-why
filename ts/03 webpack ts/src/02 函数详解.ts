// 函数作为参数 如何编写类型
function foo(){

}
type FooType=()=>void
function bar(fn:FooType){
    fn()
}
bar(foo)

// 定义常量时编写函数的类型
type addFnType=(num1:number,num2:number)=>void
const add:addFnType = (num1:number,num2:number)=>{
    return num1+num2
}
// 函数类型的案例
function calc(n1:number,n2:number,fn:(num1:number,num2:number)=>number){
    return fn(n1,n2)
}
calc(20,20,function(a1,a2){
    return a1+a2
})
// 参数的可选类型
// 可选类型必须写在必选类型后面
function fxxxxx(x:number,y?:number){
    return x
}
fxxxxx(20,10)
fxxxxx(20)

// 函数剩余参数
function sum(...nums:number[]){
    return nums
}

// 