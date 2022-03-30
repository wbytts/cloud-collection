import service from '@/utils/axios-request.js';

export default {
  // 登录
  login(params) {
    // return service.post('/login', params)
    return service({
      url: '/login',
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencode'},
      params
    })
  },
  // 获取token信息
  getTokenInfo(params) {
    return service.post('/getTokenInfo', params)
  },

}
