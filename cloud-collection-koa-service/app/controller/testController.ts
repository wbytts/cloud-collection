import { Context } from 'koa';
import responseUtil from '../utils/responseUtil';
import logger from '../logger';
import User from '../model/user'

class TestController {
  async index(ctx: Context) {
    logger.info('访问了测试接口！');
    responseUtil.success(ctx, { msg: '这是用来测试的接口！' });
  }
  async findAllUser(ctx: Context) {
    let users = await User.findAll()
    responseUtil.success(ctx, users);
  }
}

export default new TestController();
