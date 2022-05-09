/**
 * @description 扩展 axios 配置
 */
export interface AxiosOptions {
  // 请求是否携带 token
  withToken: boolean;
  // 是否需要获取原生响应 -- AxiosResponse<IResponse<T>>
  withNativeResponse: boolean;
  // 是否需要统一响应体 -- IResponse<T>
  withUnifiedResponse: boolean;
}

/**
 * @description 统一响应类型
 */
export interface IResponse<T = any> {
  code: numebr;
  msg: string;
  data: T;
}
