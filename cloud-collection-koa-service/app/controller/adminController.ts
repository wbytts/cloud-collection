import adminService from '../service/adminService'
import responseUtil from '../utils/responseUtil'
import { Context } from 'koa'

class AdminController {
  async getAdminById(ctx: Context) {
    const admin = adminService.getAdminById(2)
    responseUtil.success(ctx, admin)
  }
}

export default new AdminController()
