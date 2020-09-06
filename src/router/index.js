import Vue from 'vue';
import Router from 'vue-router';
import errorRouter from '@/router/modules/errorRouter';

Vue.use(Router);
/**
 * 注释:
 * path:""               页面路径
 *
 * name:""               命名视图的路由别名
 *
 * meta:{
 *  roles:["a","b"]      可访问页面的权限,支持多个页面,不填=任意可访问
 *  title:""             页面的名字
 *  activeMenu: '/article/list'     侧边栏高亮,顶部栏高亮
 * }
 */
const defaultRouter = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table/index.vue'),
    meta: {
      title: '表格案例',
    },
  },
  errorRouter,
  { path: '*', redirect: '/error/404' },
];

// 初始化方法
const createRouter = () => new Router({
  // mode: 'history', // 需要服务端支持
  scrollBehavior: () => ({ y: 0 }),
  routes: defaultRouter,
});

const router = createRouter();

// 重置路由,参考链接 https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
