<script setup lang="ts">
  import { Tabbar, TabbarItem } from 'vant';
  import { ref } from 'vue';

  // 当前选中的标签页
  const activeBar = ref('home');
</script>

<template>
  <div class="h-full w-full">
    <!-- 主体内容区域 -->
    <main class="h-full w-full">
      <router-view />
    </main>
    <!-- 底部导航栏 Tabbar -->
    <Tabbar v-model="activeBar" :border="false">
      <TabbarItem name="home" icon="debit-pay">首页</TabbarItem>
      <TabbarItem name="market" icon="shop-o">市场</TabbarItem>
      <TabbarItem name="my" icon="contact">我的</TabbarItem>
    </Tabbar>
  </div>
</template>
