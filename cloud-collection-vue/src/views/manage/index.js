import home from './home';

const routes = [
  {
    path: '/manage',
    name: 'manageLayout',
    component: () => import('@/pages/manageLayout'),
    children: [
      ...home, // home 页面
    ],
  },
];

export default routes;
