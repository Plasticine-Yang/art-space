<script setup lang="ts">
  import { PageRoutes } from '@/enums/page';
  import { Tabbar, TabbarItem } from 'vant';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  // 当前选中的标签页
  const activeBar = ref('home');

  onMounted(() => {
    // 将路由和激活标签页绑定
    const route = useRoute();
    const path = route.path;

    switch (path) {
      case PageRoutes.HOME:
        activeBar.value = 'home';
        break;
      case PageRoutes.MARKET:
        activeBar.value = 'market';
        break;
      case PageRoutes.MY:
        activeBar.value = 'my';
        break;
    }
  });
</script>

<template>
  <div class="h-full w-full">
    <!-- 主体内容区域 -->
    <main>
      <router-view />
    </main>
    <!-- 底部导航栏 Tabbar -->
    <Tabbar v-model="activeBar" :border="false">
      <TabbarItem name="home" icon="wap-home-o" to="/home">首页</TabbarItem>
      <TabbarItem name="market" icon="shop-o" to="/market">市场</TabbarItem>
      <TabbarItem name="my" icon="contact" to="/my">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<style scoped lang="scss">
  main {
    height: calc(100vh - 50px);
    @apply overflow-scroll;
  }
</style>
