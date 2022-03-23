const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 9090, // 前端开发服务器运行的端口
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9191', // 真实的后端地址
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
