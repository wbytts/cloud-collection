import Koa from 'koa'
import { Server } from 'http'
import router from './router'
import accessLogMiddleware from './middleware/accessLogMiddleware'
import authMiddleware from './middleware/authMiddleware'
import authDB from './db'

const app = new Koa() // 创建应用实例
authDB() // 数据库初始化

app
  .use(accessLogMiddleware) // 访问日志中间件
  .use(authMiddleware) // 权限认证中间件(jwt)
  .use(router.routes()) // 路由处理

export const runServe = (port: number | string): Server => {
  return app.listen(port)
}
