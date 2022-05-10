import { createPinia } from 'pinia';
import { App } from 'vue';

export const pinia = createPinia();

export function setupPinia(app: App) {
  app.use(pinia);
}
