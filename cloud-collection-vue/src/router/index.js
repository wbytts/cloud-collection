import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 这是 路由 
const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('@/pages/login/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
