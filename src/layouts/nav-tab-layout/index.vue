<template>
  <!-- 顶部 NavBar -->
  <NavBar
    :title="navBarTitle"
    left-arrow
    fixed
    placeholder
    :border="false"
    @click-left="router.go(-1)"
  />
  <!-- 主体内容插槽 -->
  <slot></slot>
  <!-- 底部 TabBar -->
  <Tabbar :border="false" placeholder>
    <!-- 底部 TabBar 插槽 -->
    <slot name="tabbar"></slot>
  </Tabbar>
</template>

<script setup lang="ts">
  import { NavBar, Tabbar } from 'vant';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  defineProps<{
    navBarTitle?: string;
  }>();
</script>
