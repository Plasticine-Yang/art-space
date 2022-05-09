import type { RouteRecordRaw } from 'vue-router';

export const payRoute = <RouteRecordRaw>{
  // 支付页面路由
  path: '/pay',
  name: 'Pay',
  component: () => import('@/views/pay/index.vue'),
};
