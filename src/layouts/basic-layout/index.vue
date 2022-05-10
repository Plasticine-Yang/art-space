<script setup lang="ts">
  import { Tabbar, TabbarItem } from 'vant';
  import { ref } from 'vue';

  // 当前选中的标签页
  const activeBar = ref('home');
</script>

<template>
  <div class="h-full w-full">
    <!-- 主体内容区域 -->
    <main>
      <router-view />
    </main>
    <!-- 底部导航栏 Tabbar -->
    <Tabbar v-model="activeBar" :border="false">
      <TabbarItem name="home" icon="debit-pay" to="/home">首页</TabbarItem>
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
