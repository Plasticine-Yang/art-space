import { createHtmlPlugin } from 'vite-plugin-html';

export function configHtmlPlugin(env: ImportMetaEnv) {
  const htmlPlugin = createHtmlPlugin({
    minify: true,
    // 注入数据给 index.html 后就可以使用 ejs 模板语法获取
    inject: {
      data: {
        title: env.VITE_GLOB_APP_TITLE,
      },
    },
  });

  return htmlPlugin;
}
