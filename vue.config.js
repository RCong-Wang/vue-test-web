const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-test-web/' : '/',
  devServer:{
    historyApiFallback: true,
    allowedHosts: "all",
    https: true,
  }
});
