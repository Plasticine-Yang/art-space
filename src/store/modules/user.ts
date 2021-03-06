import { login } from '@/api/modules/auth';
import { ILoginData } from '@/api/modules/auth/types';
import { getUserInfo, getUserWallet } from '@/api/modules/user';
import { PageRoutes } from '@/enums/page';
import { StorageKey } from '@/enums/storageKey';
import { IUserInfo, IUserWallet } from '@/model/user';
import { router } from '@/router';
import { StorageUtils } from '@/utils/storage';
import { defineStore } from 'pinia';
import { Toast } from 'vant';
import { pinia } from '..';

interface UserState {
  // 用户信息
  userInfo: IUserInfo | null;
  // 用户钱包信息
  walletInfo: IUserWallet | undefined;
  // token
  token?: string;
  // token 有效时间 -- 单位：秒
  tokenExpire?: number;
}

/**
 * @description 只能在 setup 中使用
 */
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: null,
    walletInfo: undefined,
    token: undefined,
    tokenExpire: 0,
  }),
  getters: {
    getToken(): string | undefined {
      return this.token ?? StorageUtils.get<string>(StorageKey.TOKEN_KEY);
    },
    getTokenExpire(): number {
      return this.tokenExpire ?? 0;
    },
    getUserInfo(): IUserInfo | undefined {
      return (
        this.userInfo ?? StorageUtils.get<IUserInfo>(StorageKey.USER_INFO_KEY)
      );
    },
    getWalletInfo(): IUserWallet | undefined {
      return this.walletInfo;
    },
  },
  actions: {
    /**
     * @description 存储 token 同时存储到 localStorage 中
     * @param token token
     */
    setToken(token: string) {
      this.token = token;
      StorageUtils.set(StorageKey.TOKEN_KEY, token, this.getTokenExpire);
    },
    /**
     * @description 设置 token 有效时间
     * @param expire token 有效时间
     */
    setTokenExpire(expire: number) {
      this.tokenExpire = expire;
    },
    /**
     * @description 存储用户信息 同时存储到 localStorage 中
     * @param userInfo 用户信息
     * @param expire 有效时间 -- 单位：秒
     */
    setUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo;
      StorageUtils.set(StorageKey.USER_INFO_KEY, userInfo, this.getTokenExpire);
    },
    /**
     * @description 存储用户钱包信息
     * @param walletInfo 钱包信息
     */
    setWalletInfo(walletInfo: IUserWallet) {
      this.walletInfo = walletInfo;
    },
    /**
     * @description 重置 state
     */
    resetState() {
      this.token = undefined;
      this.tokenExpire = 0;
      this.userInfo = null;

      StorageUtils.clear();
    },
    /**
     * @description 登录
     * @param loginData 登录 api 请求参数
     * @param goHome 登陆后是否跳转到首页 -- 默认不跳转到首页
     */
    async login(loginData: ILoginData, goHome?: boolean) {
      // 开启 Toast 加载提示
      if (goHome) {
        Toast.loading({
          message: '登陆中...',
          forbidClick: true,
        });
      }

      // 请求登录接口获取 token
      const { tokenValue, tokenActivityTimeout } = await login(loginData);
      this.setTokenExpire(tokenActivityTimeout * 1000); // 接口返回的有效期是以秒为单位的 --> 转成毫秒
      this.setToken(tokenValue);

      // 将登录逻辑转移到 afgerLoginAction 中处理
      return this.afterLoginAction(goHome);
    },
    /**
     * @description 登陆后的处理逻辑 -- 获取用户信息
     */
    async afterLoginAction(goHome?: boolean) {
      // 没有 token 不会请求用户信息
      if (!this.getToken) return null;

      // 获取用户信息
      await this.getUserInfoAction();

      // 获取钱包信息
      await this.getUserWalletInfoAction();

      // 判断是否跳转首页
      if (goHome) {
        router.replace(PageRoutes.HOME);

        // 关闭 Toast 加载提示
        Toast.success('登录成功');
      }
    },
    /**
     * @description 发起请求获取用户信息
     */
    async getUserInfoAction() {
      const userInfo = await getUserInfo();
      this.setUserInfo(userInfo);
    },
    /**
     * @description 发起请求获取用户钱包信息
     */
    async getUserWalletInfoAction() {
      const walletInfo = await getUserWallet();
      this.setWalletInfo(walletInfo);
    },
    /**
     * @description 登出
     */
    async logout() {
      this.resetState();
      router.replace(PageRoutes.LOGIN);
    },
  },
});

/**
 * @description 能够在 setup 以外的地方使用
 */
export function useUserStoreWithoutSetup() {
  return useUserStore(pinia);
}
