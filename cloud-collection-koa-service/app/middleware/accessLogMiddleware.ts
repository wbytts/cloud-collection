import { Context, Next } from 'koa';
import { accessLogger } from '../logger';

/**
 * 访问日志中间件
 */
function accessLogMiddleware(ctx: Context, next: Next) {
  // 访问的路由、访问的方法、查询参数、请求体参数
  const logStr = `path: ${ctx.path} | method: ${ctx.method} | query: ${JSON.stringify(ctx.query)} | body: ${JSON.stringify(ctx.body || {})}`;
  accessLogger.info(logStr);
  return next();
}

export default accessLogMiddleware;
