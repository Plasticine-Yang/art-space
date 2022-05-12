import { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';

import { configStyleImportPlugin } from './styleImport';
import { configHtmlPlugin } from './html';
import { configMarkdownPlugin } from './markdown';

export function createVitePlugins(env: ImportMetaEnv) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue()];

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(env));

  // vite-plugin-markdown
  vitePlugins.push(configMarkdownPlugin());

  return vitePlugins;
}
