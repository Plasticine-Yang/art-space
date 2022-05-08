<script setup lang="ts">
  import { useEnv } from '@build/utils';
  import { Row, Col } from 'vant';

  import Swipe from './Swipe.vue';
  import Tabs from './Tabs.vue';

  // ==================== data ====================

  // 网站标题
  const { VITE_GLOB_APP_TITLE: title } = useEnv(import.meta.env);

  // ==================== methods ====================
</script>

<template>
  <main class="box-border pt-6 px-4">
    <!-- 网站标题 logo -->
    <Row align="center" gutter="4">
      <Col>
        <van-icon name="smile" size="2rem" color="#B8F2E6" />
      </Col>
      <Col>
        <h1 class="m-0 tracking-widest font-thin"> {{ title }} </h1>
      </Col>
    </Row>

    <div class="flex flex-col gap-8 mt-8">
      <!-- 轮播图 -->
      <Swipe />
      <!-- 标签页 -->
      <Tabs />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
