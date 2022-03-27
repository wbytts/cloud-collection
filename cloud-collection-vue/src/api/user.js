import service from '@/utils/axios-request.js';

export default {
  // 查询所有用户
  queryAllUser() {
    return service.get('/user/queryAll')
  }
}


