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
const loadRoutes = (rous, paths, children) => {
  if (rous !== null && 'path' in rous) {
    let ps = paths.flat().filter(p => p);

    if (ps[ps.length - 1] === rous.name) {
      ps.splice(ps.length - 1, 1);
    }
    if (!children) {
      let filePs = ps.join('/');

      if (rous.path) {
        rous.path = (filePs ? '/' : '') + filePs + (rous.path[0] === '/' ? '' : '/') + rous.path;
      } else {
        rous.path = filePs;
      }
    }
    // rous.name = ps.concat([rous.name]).join('.');
    if (rous.children) {
      rous.children.forEach(child => {
        loadRoutes(child, [paths, child.name], true);
      });
      return [rous];
    }
    return [rous];
  }

  if (rous.length) {
    return rous.map(r => {
      return loadRoutes(r, [paths]);
    });
  } else {
    let arr = [];
    for (let k in rous) {
      arr = arr.concat(loadRoutes(rous[k], [paths, k]));
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
    next();
  });
  // 路由守卫（跳转后）
  router.afterEach((to, from) => {});

  return router;
}
