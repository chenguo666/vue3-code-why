// import 'css-loader!./css/index.css' 一般不这么写
import './css/index.css'
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '你好啊'

document.body.appendChild(divEl)