import { createApp } from 'vue';
import App from './App.vue';

// 修复控制台 passive events warning
import 'default-passive-events';

import './style/index.scss';
import './assets/fonts/iconfont/iconfont.css'; // 使用 iconfont

import { registerGlobCpns } from './components/registerGlobCpns';

import { router, setupRouter } from './router';
import { setupRouterGuard } from './router/guard';

import { setupPinia } from './store';

async function bootstrap() {
  const app = createApp(App);

  // 注册全局组件
  registerGlobCpns(app);

  // 集成 pinia
  setupPinia(app);

  // 集成 vue-router
  setupRouter(app);

  // 注册路由守卫
  setupRouterGuard(router);

  app.mount('#app');
}

bootstrap();
