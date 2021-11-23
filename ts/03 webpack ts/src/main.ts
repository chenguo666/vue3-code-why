import {add,sub} from './utils/math'
import {time,price} from './utils/format'
import axios from 'axios'
// npm i @types/lodash -D
// 或者自己编写声明文件
import lodash from 'lodash'
// 类型注解
const message: string = 'xfasdf'
console.log(message)
console.log(9999)

console.log(add(10,10));
console.log(sub(10,10));
console.log(time.format('xxx'));
axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
    console.log(res);
    
})
console.log(lodash.join(['132','13']));


