<template>
  <Row class="card">
    <!-- 头部 -->
    <slot name="header"></slot>

    <!-- 主体 -->
    <slot name="main"></slot>

    <!-- 尾部 -->
    <slot name="footer"></slot>
  </Row>
</template>

<script setup lang="ts">
  import { mainTextColor, tabbarColor } from '@/config/vant/themeConfig';
  import { Row } from 'vant';
  const props = defineProps<{
    // 是否圆角显示
    rounded?: boolean;
    // 内边距
    padding?: string;
    // 三部分之间的间距
    gap?: string;
    // 卡片背景颜色
    backgroundColor?: string;
    // 字体颜色
    textColor?: string;
  }>();

  // style
  const roundedStyle = props.rounded ? '1rem' : '0';
  const paddingStyle = props.padding ?? '1rem';
  const gapStyle = props.gap ?? '1rem';
  const bgColorStyle = props.backgroundColor ?? tabbarColor;
  const textColorStyle = props.textColor ?? mainTextColor;
</script>

<style scoped lang="scss">
  .card {
    border-radius: v-bind(roundedStyle);
    padding: v-bind(paddingStyle);
    gap: v-bind(gapStyle);
    background-color: v-bind(bgColorStyle);
    color: v-bind(textColorStyle);
  }
</style>
