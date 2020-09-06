// 游客可访问路由
import LayoutEmpty from '@/layout/layout-empty/layout-empty.vue';

const errorRouter = {
  path: '/error',
  component: LayoutEmpty,
  children: [
    {
      name: '404',
      path: '404',
      component: () => import('@/views/error-pages/404.vue'),
    },
  ],
};
export default errorRouter;
