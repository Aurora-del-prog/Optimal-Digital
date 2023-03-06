const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
  // transpileDependencies: true,
  //本地是否能调试，看到源码
  productionSourceMap:true,
    // 删除预加载
  chainWebpack:(config) =>{
    config.plugins.delete('prefetch');
  },
});
