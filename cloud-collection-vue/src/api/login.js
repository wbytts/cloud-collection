import service from '@/utils/axios-request.js';

export default {
  login(params) {
    return service.post('/login', params)
  },
  getTokenInfo(params) {
    return service.post('/getTokenInfo', params)
  }
}
