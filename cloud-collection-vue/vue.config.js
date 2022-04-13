const { defineConfig } = require('@vue/cli-service');

const springbootServer = 'http://127.0.0.1:9191'; // Springboot后端
const koaServer = 'http://127.0.0.1:9999'; // Koa后端

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 9090, // 前端开发服务器运行的端口
    proxy: {
      '/api': {
        target: springbootServer, // 真实的后端地址
        pathRewrite: { '^/api': '' },
      },
    },
  },
});



