import mdPlugin, { Mode } from 'vite-plugin-markdown';

/**
 * @description 开启 markdown 组件支持
 */
export function configMarkdownPlugin() {
  return mdPlugin({
    mode: [Mode.VUE],
  });
}
