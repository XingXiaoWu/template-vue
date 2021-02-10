const path = require('path');

module.exports = {
  publicPath: './',
  // 保存时lint,错误无法展示
  lintOnSave: 'default',
  // 是否生成map
  productionSourceMap: false,
  // 添加重命名
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
  // css解析
  css: {
    loaderOptions: {
      less: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.less`
        additionalData: '@import "@/styles/variables.less";',
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  // devServer: {
  //   open: true,
  //   // 开发环境默认开启反向代理，如果不需要请自行注释
  //   proxy: {
  //     '/': {
  //       target: 'http://192.168.126.50/',
  //       changeOrigin: true,
  //     },
  //   },
  // },
};
