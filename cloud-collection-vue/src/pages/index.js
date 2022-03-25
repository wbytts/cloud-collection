const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('@/pages/register/index.vue'),
  },
  {
    path: '/demo/layout-demo',
    component: () => import('@/pages/demos/layout-demo.vue'),
  },
  {
    path: '/demo/api-test',
    component: () => import('@/pages/demos/api-test.vue')
  }
];

export default routes;
