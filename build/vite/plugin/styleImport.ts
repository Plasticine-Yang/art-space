import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const styleImportPlugin = createStyleImportPlugin({
    resolves: [
      // 配置自动导入 Vant UI 样式
      VantResolve(),
    ],
  });

  return styleImportPlugin;
}
