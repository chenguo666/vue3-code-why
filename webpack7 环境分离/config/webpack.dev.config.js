const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')
module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 7777,
    open: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        pathRewrite: {
          '^/api': ''
        },
        secure: false, //默认情况下不转发到https上
        changeOrigin: true //修改源
      }
    }
  }
})