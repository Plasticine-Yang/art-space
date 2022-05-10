<script setup lang="ts">
  import { useEnv } from '@build/utils';
  import { Row, Col } from 'vant';

  // 网站标题
  const { VITE_GLOB_APP_TITLE: title } = useEnv(import.meta.env);
</script>

<template>
  <Row align="center" gutter="4">
    <Col>
      <van-icon name="smile" size="2rem" color="#B8F2E6" />
    </Col>
    <Col>
      <h1 class="m-0 tracking-widest font-bold"> {{ title }} </h1>
    </Col>
  </Row>
</template>
