import { PageRoutes } from '@/enums/page';
import type { RouteRecordRaw } from 'vue-router';

/**
 * @description 设置路由
 */
export const settingsRoute: RouteRecordRaw = {
  path: PageRoutes.SETTINGS,
  name: 'Settings',
  component: () => import('@/views/settings/index.vue'),
};
