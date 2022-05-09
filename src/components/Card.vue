<template>
  <Row class="card bg-tabbar p-4 gap-4 text-main-text-color">
    <!-- 头部 -->
    <slot name="header"></slot>

    <!-- 主体 -->
    <slot name="main"></slot>

    <!-- 尾部 -->
    <slot name="footer"></slot>
  </Row>
</template>

<script setup lang="ts">
  import { Row } from 'vant';
  const props = defineProps<{
    // 是否圆角显示
    rounded?: boolean;
  }>();

  // style
  const roundedStyle = props.rounded ? '1rem' : '0';
</script>

<style scoped lang="scss">
  .card {
    border-radius: v-bind(roundedStyle);
  }
</style>
