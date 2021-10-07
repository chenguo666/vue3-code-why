// import 'css-loader!./css/index.css' 一般不这么写
import '../font/iconfont.css'
import '../css/index.css'
import '../css/image.css'
import imgUrl from '../img/dog.jpg'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '你好啊'
const bgdivEl = document.createElement('div')
bgdivEl.className = 'image-bg'
const imgEl = document.createElement('img')
imgEl.src = imgUrl
const iEl = document.createElement('i')
iEl.className = 'icon iconfont icon-yangan'

document.body.appendChild(iEl)
document.body.appendChild(divEl)
document.body.appendChild(imgEl)
document.body.appendChild(bgdivEl)