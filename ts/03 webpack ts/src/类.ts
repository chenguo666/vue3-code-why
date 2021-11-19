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

// 类的多态

class Animal{
    action(){
        console.log('running');
        
    }
}
class Dog extends Animal {
    action(){
        console.log('dog runnning');
        
    }
}
class Fish extends Animal {
    action(){
        console.log('fish swimming');
        
    }
}
function makeActions(animals:Animal[]){
    animals.forEach(item=>{
        item.action()
    })
}
// 父类引用指向子类对象
makeActions([new Dog(),new Fish()])

// 类的成员修饰符

// plblic private protected


