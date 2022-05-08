import type { RouteRecordRaw } from 'vue-router';
import { homeRoute } from './modules/home';

/**
 * @description 基本布局的路由
 */
export const basicLayoutRoute: RouteRecordRaw = {
  path: '/',
  name: 'BasicLayout',
  redirect: '/home',
  children: [homeRoute],
};
