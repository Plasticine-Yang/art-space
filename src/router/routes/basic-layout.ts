import type { RouteRecordRaw } from 'vue-router';
import { homeRoute } from './modules/home';
import { marketRoute } from './modules/market';
import { myRoute } from './modules/my';

/**
 * @description 基本布局的路由
 */
export const basicLayoutRoute: RouteRecordRaw = {
  path: '/',
  name: 'BasicLayout',
  redirect: '/home',
  component: () => import('@/layouts/basic-layout/index.vue'),
  children: [homeRoute, myRoute, marketRoute],
};
