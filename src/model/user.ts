/**
 * @description 用户信息
 */
export interface IUserInfo {
  id: number;
  username: string;
  avatar: string;
  sex: string;
  email: string;
  phone: string;
  status: number;
  remark: string;
  loginIp: string;
  loginDate: string;
  createTime: string;
  updateTime: string;
  inviterId: number;
  identityCard: string;
  imageUrl: string;
  trueName: string;
}

/**
 * @description 用户钱包
 */
export interface IUserWallet {
  // 钱包 id
  id: number;
  // 用户 id
  userId: number;
  // 钱包余额
  money: number;
  // 积分
  accumulate: number;
}

/**
 * @description 用户藏品
 */
export interface IUserCollection {
  // 藏品编号
  shopCode: string;
  // 藏品名字
  ShopName: string;
  // 当前页
  currentPage: number;
  // 总页数
  pageSize: number;
}
