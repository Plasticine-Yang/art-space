import type { RouteRecordRaw } from 'vue-router';

import { basicLayoutRoute } from './basic-layout';

import { authRoutes } from './modules/auth';
import { collectionDetailRoutes } from './modules/collection-detail';
import { payRoute } from './modules/pay';

export const routes = <RouteRecordRaw[]>[
  basicLayoutRoute,
  payRoute,
  ...authRoutes,
  ...collectionDetailRoutes,
];
