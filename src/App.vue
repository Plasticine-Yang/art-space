<script setup lang="ts">
  import { useThemeVars } from './hooks/vant/useThemeVars';

  const themeVars = useThemeVars();
</script>

<template>
  <van-config-provider
    :theme-vars="themeVars"
    class="h-full w-full bg-[#191e24]"
  >
    <router-view />
  </van-config-provider>
</template>
