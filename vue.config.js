const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 公共路径
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.less`
        prependData: '@import "@/styles/index.less";',
      },
    },
  },
  devServer: {
    open: true,
    // https: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    // proxy: {
    // '/': {
    //   target: 'http://www.baidu.com/',
    //   // pathRewrite: {'^/entry/test/': ''},
    //   changeOrigin: true, // target是域名的话，需要这个参数，
    // // secure: true // 设置支持https协议的代理
    // },
    // },
  },
  pluginOptions: {
    electronBuilder: {
      preload: './src/preload.js',
      // 打包参数
      builderOptions: {
        appId: 'com.xxx.xxx',
        productName: '配置见vue.config.js',
        extraResources: [{
          from: path.join(__dirname, '/src/assets/logo.png'),
          to: './',
        }],
        win: {
          target: [
            {
              target: 'nsis', // 我们要的目标安装包
            },
          ],
        },
      },
    },
  },
};
