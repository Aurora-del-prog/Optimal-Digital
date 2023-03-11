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
  //调试是否能看到源码
  productionSourceMap:true,
  chainWebpack:(config) =>{
    // 删除预加载
    config.plugins.delete('prefetch');
  },
  // chunk-vendors.db740b4e.js由180k-->112k
  // 防止将某些import的包打包到bundle中，而是在运行时再去外部获取依赖，CDN引入
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-plus': 'ElementPlus'
    }
  }
});
