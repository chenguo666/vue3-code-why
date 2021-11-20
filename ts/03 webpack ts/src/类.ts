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

// 属性只读 赋值后不可修改  属性本身不可修改 但是内部的属性可以修改
class Persona{
//    readonly name:string='adf'
   private _name:string
   constructor(name:string){
       this._name = name
   }
//    访问器
// setter getter
    set name(newname){
        this._name = newname
    }
    get name(){
        return this._name
    }
}
const p= new Persona('xxx')
p.name = 'xxxx'
console.log(p.name);

// p.name='xx'

// 抽象类 abstract 可以没有实现体 抽象函数必须在抽象类里
abstract class Shapes{
    abstract getArea():number
}
class Rectangle extends Shapes{
    private width:number
    private height:number
    constructor(width:number,height:number){
        super()
        this.width =width
        this.height =height
    }
    getArea(){
        return this.width*this.height
    }
}

// 类的类型
class Pee{
    name:string='asdf'
}
const ps = new Pee()
const p1:Pee={
    name:'why'
}

// 接口

interface InfoType{
    name:string
    age:number
}
const aainfo:InfoType={
    name:'why',
    age:18
}
// 定义索引类型
interface IndexLanguage{
    [index:number]:string
}
const frontLanguage:IndexLanguage={
    1:'sdaf',
    2:'sdaf',
    3:'sdaf',
    4:'sdaf',
}