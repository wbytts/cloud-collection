import service from '@/utils/axios-request.js';

export default {
  queryAllUser() {
    return service.get('/user/queryAll')
  }
}


