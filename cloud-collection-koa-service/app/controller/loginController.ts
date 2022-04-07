import adminService from '../service/adminService';
import { Context } from 'koa';
import { sign } from '../utils/auth';
import makeResponse from '../utils/makeResponse';

class LoginController {
  async index(ctx: Context) {
    const admin = await adminService.getAdmin();
    const token = sign(admin);
    makeResponse.success(ctx, { token });
  }
}

export default new LoginController();
