import Koa from 'koa';
import { Server } from 'http';
import router from './router';
import accessLogMiddleware from './middleware/accessLogMiddleware';
import authMiddleware from './middleware/authMiddleware';
import authDB from './db';

const app = new Koa();
authDB();

app
  .use(accessLogMiddleware) // 访问日志中间件
  .use(authMiddleware) // 权限认证中间件(jwt)
  .use(router.routes()) // 路由处理
  ;

export const run = (port: number | string): Server => {
  return app.listen(port);
};
