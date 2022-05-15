<script setup lang="ts">
  import { ICommodity } from '@/model/commodity';
  import { Tab, Tabs } from 'vant';
  import { ref } from 'vue';
  import FirstRelease from './FirstRelease.vue';

  // 当前激活的标签栏项
  const activeTab = ref<'首发' | '寄售' | '活动'>('首发');

  // 商品列表
  let commodityList: ICommodity[] = [
    {
      id: 1,
      title: '太极八卦',
      cover:
        'https://unsplash.com/photos/rN1y-_EV8kE/download?ixid=MnwxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2NTI2MDcwNDA&force=true',
    },
    {
      id: 2,
      title: '雷霆嘎巴',
      cover:
        'https://unsplash.com/photos/rN1y-_EV8kE/download?ixid=MnwxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2NTI2MDcwNDA&force=true',
    },
    {
      id: 3,
      title: '沙漠之丘',
      cover:
        'https://unsplash.com/photos/rN1y-_EV8kE/download?ixid=MnwxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2NTI2MDcwNDA&force=true',
    },
  ];
  const temp = [...commodityList];
  for (let i = 0; i < 10; i++) {
    commodityList = commodityList.concat(...temp);
  }
</script>

<template>
  <!-- 顶部 tab 栏 -->
  <Tabs v-model:active="activeTab">
    <Tab title="首发">
      <FirstRelease :commodity-list="commodityList" />
    </Tab>
    <Tab title="寄售"></Tab>
    <Tab title="活动"></Tab>
  </Tabs>
</template>
