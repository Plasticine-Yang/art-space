import { useUserStoreWithoutSetup } from '@/store/modules/user';
import type { Router } from 'vue-router';
import { routeWhiteList } from './whiteList';

// 路由守卫注册函数
export function setupRouterGuard(router: Router) {
  createPageGuard(router);
}

// 创建页面路由守卫
function createPageGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    if (routeWhiteList.includes(to.path)) {
      // 白名单路由直接放行
      next();
    } else {
      // 非白名单路由需要检查是否有 token
      const userStore = useUserStoreWithoutSetup();
      const token = userStore.getToken;

      // 没有 token 就跳转到登录页
      if (!token) next('/login');
      // 有 token 则直接放行
      else next();
    }
  });
}
