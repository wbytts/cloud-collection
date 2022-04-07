import { Context, Next } from 'koa';
import { verify } from '../utils/auth';
import { accessLogger } from '../logger';

/**
 * 权限过滤中间件
 */
function authMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers['authorization'];
  if (ctx.path == '/admin/login') {
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
    ctx.body = { message: 'authorization不可以为空', result: false, code: 1000 };
  }
}

export default authMiddleware;
