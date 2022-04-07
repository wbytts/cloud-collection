import { Context } from 'koa';
import makeResponse from '../utils/makeResponse';

class ZczyController {
  async index(ctx: Context) {
    makeResponse.success(ctx, {  });
  }
}

export default new ZczyController();