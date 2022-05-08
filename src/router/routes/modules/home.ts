import type { RouteRecordRaw } from 'vue-router';

/**
 * @description 首页路由
 */
export const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
};
