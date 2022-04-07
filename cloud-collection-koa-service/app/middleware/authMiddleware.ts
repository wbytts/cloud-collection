import { Context, Next } from 'koa';
import { verify } from '../utils/auth';
import { accessLogger } from '../logger';

const whiteList = [
  '/admin/login', // 登录接口
  '/admin/register', // 注册接口
];

/**
 * 权限过滤中间件
 */
function authMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers['authorization'];
  // 白名单中的接口、以test开头的接口，不进行token验证
  if (whiteList.includes(ctx.path) || ctx.path.startsWith('/test')) {
    return next();
  }
  if (token !== undefined && token !== '') {
    // 传过来了token
    const result = verify(token);
    if (result.error !== null) {
      // token 有问题
      ctx.body = { message: result.error, code: 1000 };
    } else {
      // token 没问题
      return next();
    }
  } else {
    // 没传过来 token
    ctx.body = { message: '请先登录', result: false, code: 1000 };
  }
}

export default authMiddleware;
