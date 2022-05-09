import type { RouteRecordRaw } from 'vue-router';

export const authRoutes = <RouteRecordRaw[]>[
  // 登录路由
  {
    path: '/login',
    name: 'Login',
  },
  // 注册路由
  {
    path: '/register',
    name: 'Register',
  },
  // 找回密码路由
  {
    path: '/retrieve-password',
    name: 'RetrievePassword',
  },
];
