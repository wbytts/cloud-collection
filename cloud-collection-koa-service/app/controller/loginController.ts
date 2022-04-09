import { Context } from 'koa';
import { sign } from '../utils/auth';
import userService from '../service/userService';
import responseUtil from '../utils/responseUtil';
import User from '../model/user';

class LoginController {
  async login(ctx: Context) {
    let { username, password } = ctx.query
    let user = await User.findOne({where: {user_name: username}})
    if(user) {
      if(password === user.password) {
        const token = sign(user);
        responseUtil.success(ctx, { token }, "登陆成功");
      } else {
        responseUtil.error(ctx, null, "密码错误")
      }
    } else {
      responseUtil.error(ctx, null, "用户名不存在")
    }
    
  }
  async register(ctx: Context) {
    responseUtil.success(ctx, { msg: '注册成功' });
  }
}

export default new LoginController();
