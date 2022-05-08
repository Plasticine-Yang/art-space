import { RouteRecordRaw } from 'vue-router';
import { basicLayoutRoute } from './basic-layout';
import { authRoutes } from './modules/auth';

export const routes = <RouteRecordRaw[]>[...authRoutes, basicLayoutRoute];
