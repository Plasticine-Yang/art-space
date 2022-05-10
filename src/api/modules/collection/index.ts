/**
 * @description 封装藏品相关接口
 */
import { post, get } from '@/utils/http';
import { CollectionAPI } from '@/enums/api';
import type { ICollectionListParams, ICollectionListResponse } from './types';
import { ICollection } from '@/model/collection';

/**
 * @description 获取藏品列表
 */
export async function getCollectionList(params: ICollectionListParams) {
  try {
    // 没有传递 options.withNativeResponse -- 可以将类型断言为 ICollectionListResponse
    const res = (await post<ICollectionListResponse>(
      CollectionAPI.COLLECTION_LIST,
      params,
    )) as ICollectionListResponse;

    return {
      // 当前页不等于总页数 -- 说明还有更多数据可以加载
      hasMore: res.current !== res.pages,
      collectionList: res.records,
    };
  } catch (e) {
    return {
      hasMore: false,
      collectionList: [],
    };
  }
}

/**
 * @description 根据藏品 id 获取藏品信息
 * @param id 藏品 id
 */
export function getCollectionById(id: number) {
  // 该接口需要携带 token
  return get<ICollection>(CollectionAPI.COLLECTION_BY_ID + id, null, {
    withToken: true,
  });
}
