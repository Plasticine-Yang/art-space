<script setup lang="ts">
  import { IUserInfo, IUserWallet } from '@/model/user';

  defineProps<{
    userInfo: IUserInfo;
    userWalletInfo: IUserWallet;
  }>();
</script>

<template>
  <van-row gutter="20" align="center">
    <van-col>
      <van-image
        round
        width="5rem"
        height="5rem"
        fit="cover"
        :src="userInfo?.imageUrl"
      />
    </van-col>
    <van-col>
      <!-- 用户名 -->
      <h1>{{ userInfo?.username }}</h1>
      <!-- 积分 -->
      <p class="mt-4">积分：{{ userWalletInfo.accumulate }}分</p>
    </van-col>
  </van-row>
</template>
