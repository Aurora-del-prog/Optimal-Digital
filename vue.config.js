const { defineConfig } = require("@vue/cli-service");
// 引入 Image Minimizer 插件
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
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
  // configureWebpack 用于添加到已有的 Webpack 配置中
  chainWebpack:(config) =>{
    // 删除预加载
    config.plugins.delete('prefetch');
  },
  // chunk-vendors.db740b4e.js由180k-->112k
  // 防止将某些import的包打包到bundle中，而是在运行时再去外部获取依赖，CDN引入
  // configureWebpack 用于添加到已有的 Webpack 配置中
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-plus': 'ElementPlus'
    },
    // 压缩图片
    // 添加插件到 Webpack 配置中
    plugins: [
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical",
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  }
});
