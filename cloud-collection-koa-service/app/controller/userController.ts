import { Context } from 'koa';
import User from '../model/user';
import pageUtil from '../utils/pageUtil';
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
  async queryUserPage(ctx: Context) {
    let { nowPage, pageSize } = ctx.request.body;
    let {count: total, rows: users} = await User.findAndCountAll(pageUtil.getOffsetAndLimit(nowPage, pageSize));
    responseUtil.success(ctx, { users, total }, '查询成功');
  }
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
