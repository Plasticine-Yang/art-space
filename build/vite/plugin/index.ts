import { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue()];

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  return vitePlugins;
}
