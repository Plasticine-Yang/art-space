<script setup lang="ts">
  import { primaryColor } from '@/config/vant/themeConfig';
  import { Swipe, SwipeItem } from 'vant';

  // 轮播图的图片
  const images = [
    'https://unsplash.com/photos/Zyd_6lLUiHg/download?ixid=MnwxMjA3fDB8MXxhbGx8NXx8fHx8fDJ8fDE2NTIwMDA0MzA&force=true',
    'https://unsplash.com/photos/vCf2vSYcFls/download?ixid=MnwxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjUyMDAwNDMw&force=true',
  ];
</script>

<template>
  <div class="w-full h-36 rounded-2xl overflow-hidden">
    <Swipe
      :autoplay="3000"
      class="my-swipe"
      :indicator-color="primaryColor"
      lazy-render
    >
      <SwipeItem v-for="image in images" :key="image">
        <img :src="image" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<style scoped lang="scss">
  .my-swipe {
    @apply h-full;
    .van-swipe-item {
      img {
        @apply w-full;
        @apply object-cover;
      }
    }
  }
</style>
