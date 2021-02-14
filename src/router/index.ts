import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const defaultRoutes: Array<RouteRecordRaw> = [
  {
    meta: {
      sidebarHidden: true,
    },
    path: '/',
    redirect: '/login',
  },
  {
    meta: {
      sidebarHidden: true,
    },
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    meta: {
      sidebarHidden: true,
    },
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),

  },
];

const lastRoute = {
  meta: {
    sidebarHidden: true,
  },
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('@/views/404/index.vue'),
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes,
});

// 重置路由
function resetRouter() {
  // 移除所有路径
  const tmp = router.getRoutes();
  const defaultRoutesPath: Array<string> = [];
  defaultRoutes.forEach((item: RouteRecordRaw) => {
    defaultRoutesPath.push(item.path);
  });

  tmp.forEach((item) => {
    if (defaultRoutesPath.indexOf(item.path) === -1) {
      // 删除
      router.removeRoute(item.name || '');
    }
  });
}
// 动态路由
const dynamicRoutes: Array<RouteRecordRaw> = [];

export {
  router, lastRoute, resetRouter, defaultRoutes, dynamicRoutes,
};
