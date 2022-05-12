<script setup lang="ts">
  import { mainTextColor } from '@/config/vant/themeConfig';
  import UserInfoOperation from './user-info-operation/index.vue';
  import MyCollection from './my-collection/index.vue';
  import { useRouter } from 'vue-router';
  import { PageRoutes } from '@/enums/page';
  const router = useRouter();
</script>

<template>
  <!-- 右上角设置图标 -->
  <div class="fixed top-8 right-6" @click="router.push(PageRoutes.SETTINGS)">
    <van-icon name="setting-o" :color="mainTextColor" size="2rem" />
  </div>
  <!-- 用户信息和操作 -->
  <UserInfoOperation />
  <!-- 我的藏品 -->
  <MyCollection />
</template>
