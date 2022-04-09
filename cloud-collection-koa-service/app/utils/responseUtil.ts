import { Context } from 'koa'

export default {
  /**
   * @param ctx koa上下文
   * @param data 返回的数据
   * @param msg 接口的信息
   * @param code 状态码
   */
  success(ctx: Context, data: any = null, msg: string = 'success', code: number = 0) {
    ctx.body = { code, msg, data, result: true }
  },
  /**
   * @param ctx koa上下文
   * @param data 错误的相关数据
   * @param msg 错误的描述
   * @param code 状态码
   */
  error(ctx: Context, data: any = null, msg: string = 'error', code: number = -1) {
    ctx.body = { code, msg, data, result: false }
  },
}
