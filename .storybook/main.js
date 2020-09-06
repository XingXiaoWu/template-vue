const path = require('path')
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    // 引入重命名
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.join(__dirname, '../src'),
      }
    }
    // 引入less
    config.module.rules.push({
      test: /\.less$/,
      loaders: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, '../')
    });
    return config
  }
};
