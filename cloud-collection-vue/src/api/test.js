import service from '@/utils/axios-request.js';

export default {
  hello() {
    // 测试get请求写法
    return service.get('/hello');
  },
  testPost() {
    // 测试post 请求写法
    return service.post('/test-post');
  }
}


