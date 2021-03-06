/**
 * @description 藏品相关 API 接口地址
 */
export enum CollectionAPI {
  COLLECTION_LIST = '/shop/info/list/user',
  // 需要拼接 id -- /shop/info/get/1
  COLLECTION_BY_ID = '/shop/info/get/',
}

/**
 * @description 身份认证相关 API 接口地址
 */
export enum AuthAPI {
  LOGIN = '/user/login',
  REGISTER = '/user/reg',
  RETRIEVE_PASSWORD = '/user/retrievePassword',
  SEND_VARIFYCODE = '/user/sendRegMail/{email}',
}

/**
 * @description 用户相关 API 接口地址
 */
export enum UserAPI {
  USER_INFO = '/user/info',
  USER_WALLET = '/shop/user/wallet/getWallet',
  // 用户获取我的藏品
  USER_COLLECTIONS = '/shop/buy/record/getByUserId',
}
