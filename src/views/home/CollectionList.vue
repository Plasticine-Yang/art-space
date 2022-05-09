<script setup lang="ts">
  import { getCollectionList } from '@/api';
  import { ICollection } from '@/model/collection';

  import { List, PullRefresh } from 'vant';
  import { ref } from 'vue';
  import CollectionCard from './CollectionCard.vue';

  // data

  // 控制列表加载状态
  const listLoading = ref(false);
  // 控制列表是否还有数据
  const listFinished = ref(false);
  // 下拉加载状态
  const pullRefreshLoading = ref(false);
  // 藏品列表
  const collectionList = ref<ICollection[]>([]);
  // 当前列表页数
  const currentPage = ref(1);
  // 每页数据的个数
  const pageSize = ref(3);

  // methods

  // 下拉刷新的异步操作在这里处理
  const onRefresh = () => {
    // 重置当前页为第一页
    currentPage.value = 1;
    // 重置列表完成状态为 false
    listFinished.value = false;

    // 重置 collectionList 为第一页的数据
    getCollectionList({
      currentPage: currentPage.value,
      pageSize: pageSize.value,
    }).then(({ collectionList: collectionListRes }) => {
      collectionList.value = [];
      collectionList.value = collectionListRes;

      // 刷新状态完成
      pullRefreshLoading.value = false;
    });
  };

  // 加载下一页列表数据的操作在这里处理
  const onLoad = async () => {
    // 加载藏品列表
    const { hasMore, collectionList: collectionListRes } =
      await getCollectionList({
        currentPage: currentPage.value,
        pageSize: pageSize.value,
      });

    // 将加载到的新数据合并到 collectionList 响应式数组中
    collectionList.value.push(...collectionListRes);

    // 加载完毕后当前页数加 1 并将加载状态置为 false
    currentPage.value++;
    listLoading.value = false;

    if (!hasMore) {
      // 没有更多数据了 让加载列表不再触发上滑加载下一页数据的逻辑
      listFinished.value = true;
    }
  };
</script>

<template>
  <!-- 下拉刷新组件 -->
  <PullRefresh
    v-model="pullRefreshLoading"
    success-text="刷新成功！"
    @refresh="onRefresh"
  >
    <List v-model:loading="listLoading" :finished="listFinished" @load="onLoad">
      <CollectionCard
        v-for="item in collectionList"
        :key="item.id"
        class="mb-8"
        :collection="item"
      />
    </List>
  </PullRefresh>
</template>

<style scoped></style>
