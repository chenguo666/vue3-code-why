// 申明模块
declare module 'lodash' {
    export function join(args:any[]):void
}
// 声明变量 函数 类
declare let why:string
declare let anynumber:number
declare function name():void

declare class  Person {
    name:string
    age:number
    constructor(name:string,age:number)
}

// 声明文件 
// 导入图片也会报错 
declare module '*.jpg'
declare module '*.png'