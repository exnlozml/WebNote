// 开发时的配置
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge.merge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})