declare global {
  type Recordable<T = any> = Record<string, T>;
  interface ImportMetaEnv {
    // 运行端口
    VITE_PORT: number;
    // 部署在服务器上的公共基础路径
    VITE_PUBLIC_PATH: string;
    // API 的基础地址 如 https://xxx.com/api
    VITE_API_BASE_URL: string;
    // 网站标题 -- 会显示在浏览器标签中
    VITE_GLOB_APP_TITLE: string;
  }
}

export {};
