import home from './home';

export default [
  {
    path: '/manage',
    name: 'manageLayout',
    component: () => import('@/pages/manageLayout'),
    children: [
      ...home, // 管理端首页
    ],
  },
];


