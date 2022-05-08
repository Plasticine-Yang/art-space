import { RouteRecordRaw } from 'vue-router';
import { authRoutes } from './modules/auth';

export const routes = <RouteRecordRaw[]>[...authRoutes];
