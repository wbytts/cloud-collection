import { Context } from 'koa';
import User from '../model/user';
import responseUtil from '../utils/responseUtil';

class UserController {
  /**
   * 查询所有用户
   */
  async queryAllUser(ctx: Context) {
    let users = await User.findAll();
    responseUtil.success(ctx, { users }, '查询成功');
  }
  /**
   * 分页查询用户列表
   */
  async queryUserPage(ctx: Context) {}
  /**
   * 根据用户id查询用户信息
   */
  async queryUserById(ctx: Context) {}
  /**
   * 查询当前登录的用户的信息
   */
  async queryCurrentUserInfo(ctx: Context) {}
}

export default new UserController();
