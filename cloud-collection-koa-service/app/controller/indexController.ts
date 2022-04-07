import { Context } from 'koa';
import logger from '../logger';
import adminService from '../service/adminService';
import makeResponse from '../utils/makeResponse';

class IndexController {
  async index(ctx: Context) {
    const admin = await adminService.getAdmin();
    if (admin !== null) {
      const result = admin.toJSON();
      makeResponse.success(ctx, result);
    } else {
      makeResponse.success(ctx, null, '未查询到数据');
    }
  }
}

export default new IndexController();
