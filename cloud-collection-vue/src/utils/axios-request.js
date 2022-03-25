import axios from 'axios';



// 创建通用的axios对象，发送请求
const service = axios.create({
  baseURL: '/api',
  timeout: 5000, // 请求超时时间，毫秒
});

// 设置 service 的请求拦截器
service.interceptors.request.use(
  config => {
    config['token'] = localStorage.getItem('token')
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 设置 service 的响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// 默认导出 service
export default service;
