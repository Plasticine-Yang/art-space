/**
 * @description 登录参数
 */
export interface ILoginData {
  username: string;
  password: string;
}

/**
 * @description 登录响应
 */
export interface ILoginResponse {
  isLogin: boolean;
  loginDevice: string;
  loginId: string;
  loginType: string;
  sessionTimeout: number;
  tokenActivityTimeout: number;
  tokenName: string;
  tokenSessionTimeout: number;
  tokenTimeout: number;
  tokenValue: string;
}
