import adminService from '../service/adminService'
import { Context } from 'koa'
import { sign } from '../utils/auth'
import responseUtil from '../utils/responseUtil'

class LoginController {
  async index(ctx: Context) {
    const admin = await adminService.getAdmin()
    const token = sign(admin)
    responseUtil.success(ctx, { token })
  }
}

export default new LoginController()
