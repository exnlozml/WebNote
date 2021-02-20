// 导入path模块
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态的获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}