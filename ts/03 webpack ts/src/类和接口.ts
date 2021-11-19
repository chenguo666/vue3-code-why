// 函数的重载
type AddType =number | string
/**

联合类型缺点 要进行很多的判断 
返回值的类型不能确定

需要函数重载
 */
function add(a1:AddType,a2:AddType){
    if (typeof a1==='number'&&typeof a2==='number') {
        return a1+a2
    } else if(typeof a1==='string'&&typeof a2==='string') {
        return a1+a2
    }
}
add(10,10)
// 函数的重载 函数的名称相同 但是参数不同的几个函数 就是函数的重载
function add1(num1:number,num2:number):number //没有函数体 具体实现
function add1(num1:string,num2:string):string
function add1(num1:any,num2:any):any{
    return num1+num2
}

add1(10,20)
add1('10','20')


