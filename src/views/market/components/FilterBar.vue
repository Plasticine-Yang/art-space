<script setup lang="ts">
  import { ref } from 'vue';

  import { DropdownMenu, DropdownItem } from 'vant';
  import { primaryColor } from '@/config/vant/themeConfig';

  import type { DropdownItemOption } from 'vant';

  // 过滤规则 -- 按照哪种规则进行过滤
  const filterData = ref({
    category: 'hot',
    sort: 'comprehensive',
  });

  // 过滤规则配置 -- 规定有哪些规则
  const filterOptions = ref<{
    category: DropdownItemOption[];
    sort: DropdownItemOption[];
  }>({
    category: [
      { text: '热门', value: 'hot' },
      { text: '藏品', value: 'collection' },
      { text: '其他', value: 'other' },
    ],
    sort: [
      { text: '综合排序', value: 'comprehensive' },
      { text: '价格升序', value: 'priceAsc' },
      { text: '价格降序', value: 'priceDesc' },
    ],
  });
</script>

<template>
  <DropdownMenu :active-color="primaryColor">
    <DropdownItem
      v-model="filterData.category"
      :options="filterOptions.category"
    ></DropdownItem>
    <DropdownItem
      v-model="filterData.sort"
      :options="filterOptions.sort"
    ></DropdownItem>
  </DropdownMenu>
</template>
