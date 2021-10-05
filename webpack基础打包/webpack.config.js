const path = require('path')
module.exports = {
  //   entry: './src/index.js',
  entry: './src/element.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      //   loader: 'css-loader' 后面的loader先执行
      use: ['style-loader', 'css-loader']
    }]
  }
}