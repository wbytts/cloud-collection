import demos from './demos';
import login from './login';
import register from './register'

const routes = [
  ...demos, // 例子页面
  ...login, // 登录页面
  ...register, // 注册页面
];

export default routes;
