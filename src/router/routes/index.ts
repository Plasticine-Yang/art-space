import type { RouteRecordRaw } from 'vue-router';

import { basicLayoutRoute } from './basic-layout';

import { authRoutes } from './modules/auth';
import { collectionDetailRoutes } from './modules/collection-detail';
import { payRoute } from './modules/pay';
import { settingsRoute } from './modules/settings';

export const routes = <RouteRecordRaw[]>[
  basicLayoutRoute,
  payRoute,
  settingsRoute,
  ...authRoutes,
  ...collectionDetailRoutes,
];
