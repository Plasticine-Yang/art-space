/**
 * @description 封装认证相关接口
 */
import { get, post } from '@/utils/http';
import { AuthAPI } from '@/enums/api';
import { ILoginData, ILoginResponse, IRegisterData } from './types';

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

/**
 * @description 注册
 */
export function register(data: IRegisterData) {
  return post(AuthAPI.REGISTER, data);
}

/**
 * @description 发送邮箱验证码
 */
export function sendVarifyCode(email: string) {
  return get(AuthAPI.SEND_VARIFYCODE.replace(/{email}/, email));
}
