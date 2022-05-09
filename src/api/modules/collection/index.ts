/**
 * @description 封装藏品相关接口
 */
import { post } from '@/utils/http';
import { CollectionAPI } from '@/enums/api';
import type { ICollectionListParams, ICollectionListResponse } from './types';

/**
 * @description 获取藏品列表
 */
export async function getCollectionList(params: ICollectionListParams) {
  // 没有传递 options.withNativeResponse -- 可以将类型断言为 ICollectionListResponse
  const collectionList = (await post<ICollectionListResponse>(
    CollectionAPI.COLLECTION_LIST,
    params,
  )) as ICollectionListResponse;

  return {
    // 当前页不等于总页数 -- 说明还有更多数据可以加载
    hasMore: collectionList.current !== collectionList.pages,
    collectionList,
  };
}
