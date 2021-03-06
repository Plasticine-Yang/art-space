import { PageRoutes } from '@/enums/page';
import type { RouteRecordRaw } from 'vue-router';

// 市场路由
export const marketRoute = <RouteRecordRaw>{
  path: PageRoutes.MARKET,
  name: 'Market',
  component: () => import('@/views/market/index.vue'),
};
