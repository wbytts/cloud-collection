import Vue from 'vue';
import VueRouter from 'vue-router';
import views from '@/views';
import pages from '@/pages';

Vue.use(VueRouter);

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch(err => err);
};

// 路由递归加载方法
const loadRoutes = (routes, paths, children) => {
  if (routes !== null && 'path' in routes) {
    let ps = paths.flat().filter(p => p);

    if (ps[ps.length - 1] === routes.name) {
      ps.splice(ps.length - 1, 1);
    }
    if (!children) {
      let filePs = ps.join('/');

      if (routes.path) {
        routes.path = (filePs ? '/' : '') + filePs + (routes.path[0] === '/' ? '' : '/') + routes.path;
      } else {
        routes.path = filePs;
      }
    }
    // routes.name = ps.concat([routes.name]).join('.');
    if (routes.children) {
      routes.children.forEach(child => {
        loadRoutes(child, [paths, child.name], true);
      });
      return [routes];
    }
    return [routes];
  }

  if (routes.length) {
    return routes.map(r => {
      return loadRoutes(r, [paths]);
    });
  } else {
    let arr = [];
    for (let k in routes) {
      arr = arr.concat(loadRoutes(routes[k], [paths, k]));
    }
    return arr;
  }
};

/**
 * 工厂模式函数，创建路由对象
 */
export function createRouter() {
  let viewRoutes = loadRoutes(views).flat(); // 读取views目录下的路由
  let routes = viewRoutes.concat(pages); // 读取pages目录下的路由

  const router = new VueRouter({
    mode: 'history',
    routes,
  });

  // 路由守卫（跳转前）
  router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token') // 获取token
    // 如果没登陆，并且要去的地方不是登陆页面，则强制跳转到登陆页面
    // 这里暂时用一下，后期测试页面也要加进来，可能还有其它的
    if(!token && to.name != 'loginPage') { // 如果没有token，表示用户未登录，则强制跳转到登陆页面
      next('/login')
      return;
    }

    // 如果不是以上情形，则默认跳转
    next();
  });
  // 路由守卫（跳转后）
  router.afterEach((to, from) => {});

  return router;
}
