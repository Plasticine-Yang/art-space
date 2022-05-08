<script setup lang="ts">
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

  // 临时测试数据
  const tempList: ICollection[] = [
    {
      id: 1,
      shopName: '测试商品1',
      shopPrice: 66.6,
      shopDec: '商品描述',
      shopTypeId: 1,
      shopCoverImage:
        'https://unsplash.com/photos/Dd9Wkk5vj80/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUxNjM5NjY4&force=true',
      shopStock: 1,
      shopLink:
        'https://unsplash.com/photos/Dd9Wkk5vj80/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUxNjM5NjY4&force=true',
      buyLimit: 16,
      sellTime: '2022年5月4日 14:11',
      shopType: {
        id: 1,
        typeName: '测试类型',
      },
      shopTypeTag: [],
      shopCoverImages: null,
      shopImages: null,
    },
    {
      id: 2,
      shopName: '测试商品2',
      shopPrice: 76.6,
      shopDec: '商品描述',
      shopTypeId: 1,
      shopCoverImage:
        'https://unsplash.com/photos/y8wjQZ9XP4A/download?ixid=MnwxMjA3fDF8MXxhbGx8NTF8fHx8fHwyfHwxNjUxNjQ0MDQ0&force=true',
      shopStock: 2,
      shopLink:
        'https://unsplash.com/photos/y8wjQZ9XP4A/download?ixid=MnwxMjA3fDF8MXxhbGx8NTF8fHx8fHwyfHwxNjUxNjQ0MDQ0&force=true',
      buyLimit: 88,
      sellTime: '2022年5月3日 18:21',
      shopType: {
        id: 1,
        typeName: '测试类型',
      },
      shopTypeTag: [],
      shopCoverImages: null,
      shopImages: null,
    },
  ];

  // methods

  // 下拉刷新的异步操作在这里处理
  const onRefresh = () => {
    setTimeout(() => {
      // 将藏品列表中的数据重置为一个
      collectionList.value = [tempList[0]];
      pullRefreshLoading.value = false;
    }, 1000);
  };

  // 加载下一页列表数据的操作在这里处理
  const onLoad = () => {
    setTimeout(() => {
      collectionList.value.push(tempList[1]);

      listLoading.value = false;

      if (collectionList.value.length >= 30) {
        listFinished.value = true;
      }
    }, 1000);
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
