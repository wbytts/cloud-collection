import { Context } from 'koa'
import logger from '../logger'
import adminService from '../service/adminService'
import responseUtil from '../utils/responseUtil'

class IndexController {
  async index(ctx: Context) {
    const admin = await adminService.getAdmin()
    if (admin !== null) {
      const result = admin.toJSON()
      responseUtil.success(ctx, result)
    } else {
      responseUtil.success(ctx, null, '未查询到数据')
    }
  }
}

export default new IndexController()
