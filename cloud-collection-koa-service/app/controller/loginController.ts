import { Context } from 'koa';
import { sign } from '../utils/auth';
import userService from '../service/userService';
import responseUtil from '../utils/responseUtil';

class LoginController {
  async login(ctx: Context) {
    const user = await userService.getUser();
    const token = sign(user);
    responseUtil.success(ctx, { token });
  }
  async register(ctx: Context) {
    responseUtil.success(ctx, { msg: '注册成功' });
  }
}

export default new LoginController();
