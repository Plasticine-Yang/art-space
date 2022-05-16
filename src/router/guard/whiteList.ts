import { RouteRecordRaw } from 'vue-router';
import { authRoutes } from '../routes/modules/auth';
import { homeRoute } from '../routes/modules/home';
import { marketRoute } from '../routes/modules/market';

// 路由白名单 -- 不需要登录即可访问的路由
const routeRawWhiteList = <RouteRecordRaw[]>[
  ...authRoutes,
  homeRoute,
  marketRoute,
];

// 导出 path 数组
export const routeWhiteList = <string[]>[
  ...routeRawWhiteList.map((route) => route.path),
];
