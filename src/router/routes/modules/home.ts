import { PageRoutes } from '@/enums/page';
import type { RouteRecordRaw } from 'vue-router';

/**
 * @description 首页路由
 */
export const homeRoute: RouteRecordRaw = {
  path: PageRoutes.HOME,
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
};
