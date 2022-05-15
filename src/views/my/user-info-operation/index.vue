<script setup lang="ts">
  import Card from '@/components/Card.vue';
  import { IUserInfo, IUserWallet } from '@/model/user';
  import { useUserStore } from '@/store/modules/user';
  import { onMounted, ref } from 'vue';
  import UserInfo from './UserInfo.vue';
  import UserOperation from './UserOperation.vue';

  const userInfo = ref<IUserInfo>();
  const userWalletInfo = ref<IUserWallet>();

  onMounted(() => {
    const userStore = useUserStore();

    // 加载用户信息
    userStore.getUserInfoAction().then(() => {
      userInfo.value = userStore.getUserInfo;
    });

    // 加载用户钱包信息
    userStore.getUserWalletInfoAction().then(() => {
      userWalletInfo.value = userStore.getWalletInfo;
    });
  });
</script>

<template>
  <Card padding="3rem 1rem 3rem 1rem" gap="2rem">
    <template #header>
      <!-- 用户信息 -->
      <UserInfo
        v-if="userInfo && userWalletInfo"
        :user-info="userInfo"
        :user-wallet-info="userWalletInfo"
      />
    </template>
    <template #main>
      <!-- 用户操作区域 -->
      <UserOperation />
    </template>
  </Card>
</template>
