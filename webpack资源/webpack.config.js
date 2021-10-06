const path = require('path')
module.exports = {
  //   entry: './src/index.js',
  entry: './src/element.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
      // assetModuleFilename: 'img/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        //   loader: 'css-loader' 后面的loader先执行
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                //   plugins: [require('autoprefixer')]
                plugins: [require('postcss-preset-env')]
              }
            }
          }
        ]
      },
      //   {
      //     test: /\.(jpg|png|gif|svg|jpeg)$/,
      //     use: {
      //       loader: 'url-loader',
      //       options: {
      //         outputPath: 'img',
      //         name: '[name]_[hash:6].[ext]',
      //         limit: 50 * 1024
      //       }
      //     }
      //   },
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
      //   {
      //     test: /\.(eot|ttf|woff|woff2)$/,
      //     use: {
      //       loader: 'file-loader',
      //       options: {
      //         // outputPath: 'font',
      //         name: 'font/[name]_[hash:6].[ext]'
      //       }
      //     }
      //   },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      }
    ]
  }
}