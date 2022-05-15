<script setup lang="ts">
  import { Notify } from 'vant';
  import Swipe from './Swipe.vue';
  import Tabs from './Tabs.vue';
  import LogoTitle from '@/components/LogoTitle.vue';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();

  onMounted(() => {
    // Notify 弹出欢迎提示
    let username = userStore.getUserInfo?.username ?? '游客';

    Notify({
      type: 'success',
      message: `欢迎您：${username}！`,
    });
  });
</script>

<template>
  <main class="box-border py-6 px-4">
    <!-- 网站标题 logo -->
    <LogoTitle />

    <div class="flex flex-col gap-2 mt-8">
      <!-- 轮播图 -->
      <Swipe />
      <!-- 标签页 -->
      <Tabs />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
