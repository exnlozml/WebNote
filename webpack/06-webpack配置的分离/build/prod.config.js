// 生产时的配置
const UglifyjsWebpackOlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge.merge(baseConfig, {
  plugins: [
    new UglifyjsWebpackOlugin()
  ]
})