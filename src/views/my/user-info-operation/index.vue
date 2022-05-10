<script setup lang="ts">
  import Card from '@/components/Card.vue';
  import { IUserInfo } from '@/model/user';
  import { useUserStore } from '@/store/modules/user';
  import { onMounted, ref } from 'vue';
  import UserInfo from './UserInfo.vue';
  import UserOperation from './UserOperation.vue';

  const userInfo = ref<IUserInfo>();

  onMounted(() => {
    // 加载用户信息
    const userStore = useUserStore();
    userStore.getUserInfoAction().then(() => {
      userInfo.value = userStore.getUserInfo;
    });
  });
</script>

<template>
  <Card padding="3rem 1rem 3rem 1rem" gap="2rem">
    <template #header>
      <!-- 用户信息 -->
      <UserInfo v-if="userInfo" :user-info="userInfo" />
    </template>
    <template #main>
      <!-- 用户操作区域 -->
      <UserOperation />
    </template>
  </Card>
</template>
