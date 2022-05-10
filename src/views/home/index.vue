<script setup lang="ts">
  import Swipe from './Swipe.vue';
  import Tabs from './Tabs.vue';
  import LogoTitle from '@/components/LogoTitle.vue';
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
