/**
 * @description 封装用户相关接口
 */
import { get } from '@/utils/http';
import { UserAPI } from '@/enums/api';
import { IUserInfo } from '@/model/user';

/**
 * @description 获取用户信息
 */
export async function getUserInfo() {
  const res = (await get<IUserInfo>(UserAPI.USER_INFO)) as IUserInfo;

  return res;
}
