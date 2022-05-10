import { App } from 'vue';

import { Icon, ConfigProvider, Lazyload, Image, Row, Col } from 'vant';

export function registerGlobCpns(app: App) {
  app.use(Icon).use(ConfigProvider).use(Lazyload).use(Image).use(Row).use(Col);
}
