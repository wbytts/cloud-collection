export default [
  {
    path: '/demo/layout-demo',
    component: () => import('@/pages/demos/layout-demo.vue'),
  },
  {
    path: '/demo/test-api',
    component: () => import('@/pages/demos/test-api.vue'),
  },
  {
    path: '/demo/user-manage',
    component: () => import('@/pages/demos/user-manage.vue'),
  },
];
