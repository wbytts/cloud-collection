import { Context } from 'koa'
import responseUtil from '../utils/responseUtil'

class ZczyController {
  async index(ctx: Context) {
    responseUtil.success(ctx, {})
  }
}

export default new ZczyController()
