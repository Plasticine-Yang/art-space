// vite.config.ts 中不能使用路径别名去导入别的包 因为此时 vite 还没初始化完毕 路径别名没有生效 还是需要用相对路径
import { createVitePlugins } from './build/vite/plugin';
import { useEnv } from './build/utils';

import { defineConfig, loadEnv } from 'vite';

import path from 'path';

// 工作目录
const root = process.cwd();

// 封装路径拼接函数
const pathResolve = (...paths: string[]) => path.resolve(root, ...paths);

// 路径别名
const alias: { [find: string]: string } = {
  '@': pathResolve('src'),
  '@build': pathResolve('build'),
  '#': pathResolve('types'),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT } = useEnv(loadEnv(mode, root));

  return {
    server: {
      port: VITE_PORT,
    },
    plugins: createVitePlugins(),
    resolve: {
      alias,
    },
  };
});
