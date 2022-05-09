<script setup lang="ts">
  import { useThemeVars } from './hooks/vant/useThemeVars';

  const themeVars = useThemeVars();
</script>

<template>
  <van-config-provider :theme-vars="themeVars" class="h-full w-full bg-main-bg">
    <router-view />
  </van-config-provider>
</template>
