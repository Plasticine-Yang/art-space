import { App } from 'vue';

import { Icon, ConfigProvider } from 'vant';

export function registerGlobCpns(app: App) {
  app.use(Icon).use(ConfigProvider);
}
