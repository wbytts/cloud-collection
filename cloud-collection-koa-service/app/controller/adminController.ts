import adminService from '../service/adminService';
import makeResponse from '../utils/makeResponse';
import { Context } from 'koa';

class AdminController {
  async getAdminById(ctx: Context) {
    const admin = adminService.getAdminById(2);
    makeResponse.success(ctx, admin);
  }
}

export default new AdminController();
