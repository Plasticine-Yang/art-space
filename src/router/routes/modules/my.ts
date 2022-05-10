import { PageRoutes } from '@/enums/page';
import type { RouteRecordRaw } from 'vue-router';

/**
 * @description 我的路由
 */
export const myRoute: RouteRecordRaw = {
  path: PageRoutes.MY,
  name: 'My',
  component: () => import('@/views/my/index.vue'),
};
