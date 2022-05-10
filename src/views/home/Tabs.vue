<script setup lang="ts">
  import { Tab, Tabs, Empty } from 'vant';
  import { ref } from 'vue';
  import CollectionList from '@/views/home/collection/CollectionList.vue';

  const activeTab = ref(0);
</script>

<template>
  <!-- shrink 让标签不会填满宽度 -->
  <!-- swipeable 允许滑动内容去更换标签 -->
  <!-- sticky 让标签吸顶 -->
  <Tabs v-model:active="activeTab" shrink swipeable sticky>
    <Tab title="数字藏品">
      <!-- 藏品列表 -->
      <CollectionList class="mt-2" />
    </Tab>
    <Tab title="藏品专题">
      <Empty description="暂无数据" />
    </Tab>
  </Tabs>
</template>
