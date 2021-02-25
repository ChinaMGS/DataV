/**
 * 按需引入webpackPlugin、loader
 */
const TerserPlugin = require('terser-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const os = require('os')
const osNum = os.cpus().length / 2
console.log('当前使用cpu数量:', osNum)

const TerserWebpackPlugin = new TerserPlugin({
  cache: true,
  parallel: os.cpus().length / 2 // 根据运维要求，只是用一半数量
})

const smpWrap = new SpeedMeasurePlugin()

const threadLoader = {
  workers: osNum
}

module.exports = {
  TerserWebpackPlugin,
  smpWrap,
  threadLoader
}
