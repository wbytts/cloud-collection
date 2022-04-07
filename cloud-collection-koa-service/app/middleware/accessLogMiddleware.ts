import { Context, Next } from 'koa'
import { accessLogger } from '../logger'

/**
 * 访问日志中间件
 */
function accessLogMiddleware(ctx: Context, next: Next) {
  const logStr = `path:${ctx.path} | method:${ctx.method} | ua:${ctx.headers['user-agent']}`
  accessLogger.info(logStr)
  return next()
}

export default accessLogMiddleware
