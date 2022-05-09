import { ICollection } from '@/model/collection';

/**
 * @description 获取商品列表接口的 GET 请求参数
 */
export interface ICollectionListParams {
  currentPage: number;
  pageSize: number;
  shopInfo?: {
    shopName: string;
  };
}

/**
 * @description 获取商品藏品列表的 GET 请求响应
 */
export interface ICollectionListResponse {
  records: ICollection[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  hitCount: boolean;
  countId: string;
  maxLimit: string;
  searchCount: boolean;
  pages: number;
}
