import Koa from 'koa';
import { Server } from 'http';
import router from './router';
import accessLogMiddleware from './middleware/accessLogMiddleware';
import authMiddleware from './middleware/authMiddleware';
import authDB from './db';
import koaBody from 'koa-body';
import path from 'path';

const app = new Koa(); // 创建应用实例
authDB(); // 数据库初始化

app.use(
  koaBody({
    // multipart: true, // 支持文件上传
    // encoding: 'gzip',
    // formidable: {
    //   uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
    //   keepExtensions: true, // 保持文件的后缀
    //   maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    //   onFileBegin: (name, file) => {
    //     // 文件上传前的设置
    //     // console.log(`name: ${name}`);
    //     // console.log(file);
    //   },
    // },
  })
);

app
  .use(accessLogMiddleware) // 访问日志中间件
  .use(authMiddleware) // 权限认证中间件(jwt)
  .use(router.routes()); // 路由处理

export const runServe = (port: number | string): Server => {
  return app.listen(port);
};
