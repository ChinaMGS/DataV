'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api/yifd': {
      //   target: 'http://192.168.11.25:8200', // 🐂🐂🐂🐂🐂🐂
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // }
      // '/api/yifd': {
      //   target: 'http://192.168.10.143:8200', // 🐰🐰🐰🐰🐰🐰
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      //  '/api/yifd': {
      //   target: 'http://192.168.11.100:8200', // 黑熊精
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      // '/api/yifd': {
      //   target: 'http://192.168.11.59:8200', // 老大
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      // '/api/yifd': {
      //   target: 'http://192.168.11.31:8200', // 人参果
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      // '/api/yifd': {
      // target: 'http://97ahzp.natappfree.cc', // 二郎神
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      // '/api/yifd': {
      //   target: 'http://192.168.11.186:8200', // 🐷🐷🐷🐷🐷🐷
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      // '/api/yifd': {
      //   target: 'http://rjktg2.natappfree.cc', // 葫芦娃
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // }
      // '/api/yifd': {
      //   target: 'http://192.168.11.100', //  🐻
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/yifd': ''
      //   }
      // },
      "/api/yifd": {
        target: "http://121.40.115.212:8001", // 开发
        changeOrigin: true,
        pathRewrite: {
          "^/api/yifd": ""
        }
      },
      // "/api/yifd": {
      //   target: "http://121.40.115.212:8001", // 开发
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api/yifd": ""
      //   }
      // }
      // "/api/yifd": {
      //   target: "http://121.40.185.31:8001", // 测试
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api/yifd": ""
      //   }
      // }
    },
    // Various Dev Server settings
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    port: 8000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'public',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'cheap-module-source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
