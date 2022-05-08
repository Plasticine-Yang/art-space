/**
 * @description 原始 vite 环境变量全是 string 类型，该函数能够将其转成正确类型
 * @param env 原始的 vite 环境变量
 * @returns 类型正确的 vite 环境变量
 */
export function useEnv(env: Recordable): ImportMetaEnv {
  const resolvedEnv: any = {};

  for (let [key, value] of Object.entries(env)) {
    if (key === 'VITE_PORT') {
      resolvedEnv[key] = parseInt(value);
    }

    value = value === 'true' ? true : value === 'false' ? false : value;

    resolvedEnv[key] = value;
  }

  return resolvedEnv;
}
