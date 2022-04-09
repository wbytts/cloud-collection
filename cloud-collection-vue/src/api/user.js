import service from '@/utils/axios-request.js';

export default {
  // 查询所有用户
  queryAllUser() {
    return service.post('/user/queryAll');
  },
  // 分页查询用户信息
  queryUserPage(params) {
    return service({
      url: '/user/queryPage',
      method: 'post',
      data: params,
    });
  },
};
