<script setup lang="ts">
  import { NavBar } from 'vant';
  import { useRouter } from 'vue-router';

  defineProps<{
    navBarTitle?: string;
  }>();

  const router = useRouter();
</script>

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
</template>
