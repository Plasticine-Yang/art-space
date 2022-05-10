import { PageRoutes } from '@/enums/page';
import type { RouteRecordRaw } from 'vue-router';

export const authRoutes = <RouteRecordRaw[]>[
  // 登录路由
  {
    path: PageRoutes.LOGIN,
    name: 'Login',
    component: () => import('@/views/auth/login/index.vue'),
  },
  // 注册路由
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/register/index.vue'),
  },
  // 找回密码路由
  {
    path: '/retrieve-password',
    name: 'RetrievePassword',
    component: () => import('@/views/auth/retrieve-password/index.vue'),
  },
];
