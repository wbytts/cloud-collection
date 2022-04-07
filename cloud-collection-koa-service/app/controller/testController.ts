import { Context } from 'koa';
import responseUtil from '../utils/responseUtil';

class IndexController {
  async index(ctx: Context) {
    responseUtil.success(ctx, { msg: '这是用来测试的接口！' });
  }
}

export default new IndexController();
