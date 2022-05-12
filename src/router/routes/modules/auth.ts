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
    path: PageRoutes.REGISTER,
    name: 'Register',
    component: () => import('@/views/auth/register/index.vue'),
  },
  // 找回密码路由
  {
    path: PageRoutes.RETRIEVE_PASSWORD,
    name: 'RetrievePassword',
    component: () => import('@/views/auth/retrieve-password/index.vue'),
  },
  // 注册协议路由
  {
    path: PageRoutes.AGREEMENT_REGISTERATION,
    name: 'AgreementRegisteration',
    component: () => import('@/views/auth/register/AgreementRegisteration.vue'),
  },
  // 隐私条款路由
  {
    path: PageRoutes.AGREEMENT_PRIVACY,
    name: 'AgreementPrivacy',
    component: () => import('@/views/auth/register/AgreementPrivacy.vue'),
  },
];
