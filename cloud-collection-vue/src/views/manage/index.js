import home from './home';
import user from './user'

export default [
  {
    path: '/manage',
    name: 'manageLayout',
    component: () => import('@/pages/manageLayout'),
    children: [
      ...home, // 管理端首页
      ...user, // 用户管理
    ],
  },
];


