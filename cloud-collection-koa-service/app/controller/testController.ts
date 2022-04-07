import { Context } from 'koa';
import responseUtil from '../utils/responseUtil';
import logger from '../logger';

class TestController {
  async index(ctx: Context) {
    logger.info('访问了测试接口！');
    responseUtil.success(ctx, { msg: '这是用来测试的接口！' });
  }
}

export default new TestController();
