import { useEnv } from '@build/utils';
import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { AxiosOptions, IResponse } from '#/axios';
import { StorageKey } from '@/enums/storageKey';
import { Notify } from 'vant';
import { StorageUtils } from './storage';

const { VITE_API_BASE_URL } = useEnv(import.meta.env);

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (value) => {
    if (value.data?.code !== 200) {
      // api 异常抛出给 onRejected 处理
      return Promise.reject(value);
    }

    return value;
  },
  (error: AxiosError) => {
    let msg = '未知错误';
    if (error.response?.data) {
      const data = error.response.data as IResponse;
      msg = data.msg;
    } else {
      msg = error.message;
    }

    Notify({ type: 'danger', message: msg });

    return error;
  },
);

/**
 * 封装 request 方法 -- T 是包装在 AxiosResponse 中的数据类型
 * @param config 原生 axios 请求配置对象
 * @param options 额外扩展的配置对象 -- 不传则默认全都不生效
 */
export async function request<T = any>(
  config: AxiosRequestConfig,
  options?: Partial<AxiosOptions>,
) {
  if (options?.withToken) {
    // 携带 token 发送请求
    const token = StorageUtils.get(StorageKey.TOKEN_KEY, '');
    if (token) {
      config.headers = {
        'com.zero.shop': token,
      };
    }
  }

  const res = await axiosInstance.request<IResponse<T>>(config);

  if (options?.withNativeResponse) {
    // 开启了 withNativeResponse 配置项时返回 axios 原生响应
    return res;
  }

  if (options?.withUnifiedResponse) {
    // 开启了 withUnifiedResponse 配置项时返回 统一响应体包装的结果
    return res.data;
  }

  // 默认返回 T，即调用者希望得到的数据类型 不需要再 res.data.data 去获取
  return res.data.data;
}

/**
 * 封装 get 请求 -- T 是包装在 AxiosResponse 中的数据类型
 * @param url api 接口 url
 * @param params 携带的参数
 * @param options 额外扩展的配置对象 -- 不传则默认全都不生效
 */
export function get<T = any>(
  url: string,
  params?: any,
  options?: Partial<AxiosOptions>,
) {
  return request<T>({ url, method: 'GET', params }, options);
}

/**
 * 封装 post 请求 -- T 是包装在 AxiosResponse 中的数据类型
 * @param url api 接口 url
 * @param data 携带的 data
 * @param options 额外扩展的配置对象 -- 不传则默认全都不生效
 */
export function post<T = any>(
  url: string,
  data: any,
  options?: Partial<AxiosOptions>,
) {
  return request<T>({ url, method: 'POST', data }, options);
}
