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
