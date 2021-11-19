class Person {
    // 必须初始化
    // 属性和方法
    name:string 
    age:number 
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    eating(){
        console.log(this.name+'eating');
        
    }
}
// const p = new Person()
// p.eating()
// 类的继承
class Student extends Person{
    sno:number=0
    constructor(name:string,age:number,sno:number){
        super(name,age)//调用父类构造器
        this.sno = sno
    }
    studying(){
        console.log('studying');
    }
    eating(){
        super.eating()
        console.log('stu eating');
        
    }
}
class Teacher{
    title:string=''
    teaching(){
        console.log('teaching');
    }
}
const stu = new Student('chan',22,1)
// stu.name='chan'
// stu.age=22
console.log(stu.name,stu.age);
stu.eating()

