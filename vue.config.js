const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer:{
    historyApiFallback: true,
    allowedHosts: "all",
    https: true,
  }
});
