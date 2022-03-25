import service from '@/utils/axios-request.js';

export default {
  hello() {
    // get请求写法
    return service.get('/hello');
  },
  testPost() {
    // post 请求写法
    return service.post('/test-post');
  }
}


