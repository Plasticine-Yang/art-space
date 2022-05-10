<script setup lang="ts">
  import Card from '@/components/Card.vue';
  import { mainBgColor } from '@/config/vant/themeConfig';
  import { Empty } from 'vant';
</script>

<template>
  <Card
    :background-color="mainBgColor"
    border-radius="2rem"
    class="relative top-[-1rem]"
  >
    <template #header>
      <h3>我的藏品</h3>
      <Empty description="您暂时还没有藏品哦~" />
    </template>
  </Card>
</template>
