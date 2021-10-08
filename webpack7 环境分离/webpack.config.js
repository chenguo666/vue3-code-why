const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
  },
  //   resolve: {
  //     extensions: ['js', 'json', 'mjs', 'vue'], //自动匹配后缀
  //     alias: {
  //       '@': path.resolve(__dirname, './src')
  //     }
  //   },
  devServer: {
    // contentBase: './public'
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
  },
  module: {
    rules: [{
        test: /\.css$/,
        // 后面的loader先执行
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
          // use: {
          //   loader: 'babel-loader',
          //   options: {
          //     // plugins: [
          //     //   '@babel/plugin-transform-arrow-functions',
          //     //   '@babel/plugin-transform-block-scoping'
          //     // ]
          //     presets: ['@babel/preset-env']
          //   }
          // }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    //   放一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: './',
        // to: 'build',
        globOptions: {
          ignore: ['**/index.html']
        }
      }]
    }),
    new VueLoaderPlugin()
  ]
}