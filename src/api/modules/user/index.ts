/**
 * @description 封装用户相关接口
 */
import { get, post } from '@/utils/http';
import { UserAPI } from '@/enums/api';
import { IUserCollection, IUserInfo, IUserWallet } from '@/model/user';

/**
 * @description 获取用户信息
 */
export async function getUserInfo() {
  const res = (await get<IUserInfo>(UserAPI.USER_INFO)) as IUserInfo;

  return res;
}

/**
 * @description 获取用户钱包信息
 */
export function getUserWallet() {
  return get<IUserWallet>(UserAPI.USER_WALLET) as Promise<IUserWallet>;
}

/**
 * @description 用户获取我的藏品
 */
export async function getUserCollections() {
  const res = (await post<IUserCollection>(
    UserAPI.USER_COLLECTIONS,
  )) as IUserCollection;

  return {
    hasMore: res.currentPage < res.pageSize,
    // userCollections: res
  };
}
