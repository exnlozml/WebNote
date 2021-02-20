// 公共配置
// 导入path模块
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态的获取路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        // css-loader只负责将css文件进行加载, 不负责解析
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时 从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式
            // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载
            limit: 8000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        // exclude排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    // alias: 别名
    extensions: ['.js', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归aaa所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}