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

/**
 * @description 注册参数
 */
export interface IRegisterData {
  email: string;
  userName: string;
  inviteUser?: string;
  phone: string;
  passWord: string;
  varifyCode: string;
}

/**
 * @description 找回密码参数
 */
export interface IRetrievePasswordData {
  email: string;
  varifyCode: string;
  passWord: string;
}
