9.25 开始
9.27 03
9.28 04
9.29 05
9.30 06
10.5 07
10.6 08
10.7 09
10.8 10
10.12 12
10.15 14
10.16 15
10.18 16
10.19 17
10.20 18
10.21 19
10.22 20 讲源码的 看不懂
10.25 21 讲源码的 前面看不懂 后面半节课是讲路由的
10.25 22
10.28 23 后面介绍 devtool 工具
11.09 24 vuex
11.10 25
11.11 26 ts
webpack5 之前 加载资源需要 loader raw-loader url-loader file-loader
webpack5 之后 可以直接使用资源模块类型 （asset module type）来替代上面的 loader

分包小技巧
通过 import 函数导入的模块 后续 webpack 对其进行打包会默认进行分包操作
import('./xxx).then(res=>{
console.log(rse.xxx())
})
