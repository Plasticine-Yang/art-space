/**
 * @description 封装认证相关接口
 */
import { post } from '@/utils/http';
import { AuthAPI } from '@/enums/api';
import { ILoginData, ILoginResponse } from './types';

/**
 * @description 登录
 */
export async function login(data: ILoginData) {
  const res = (await post<ILoginResponse>(
    AuthAPI.LOGIN,
    data,
  )) as ILoginResponse;

  return res;
}
