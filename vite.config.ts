import { createVitePlugins } from './build/vite/plugin';
import path from 'path';
import { defineConfig } from 'vite';

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
export default defineConfig(() => {
  return {
    plugins: createVitePlugins(),
    resolve: {
      alias,
    },
  };
});
