import { createApp } from 'vue';
import App from './App.vue';
import { registerGlobCpns } from './components/registerGlobCpns';
import { setupRouter } from './router';

import './style/index.scss';

async function bootstrap() {
  const app = createApp(App);

  // 注册全局组件
  registerGlobCpns(app);

  // 集成 vue-router
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
