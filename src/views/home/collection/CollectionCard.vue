<template>
  <Card :rounded="rounded">
    <!-- 发售时间标签 -->
    <template #header>
      <Row gutter="10">
        <Col>发售时间</Col>
        <Col>
          <Tag> {{ collection.sellTime }} </Tag>
        </Col>
      </Row>
    </template>
    <!-- 藏品图片 -->
    <template #main>
      <Row>
        <van-image radius="0.75rem" :src="collection.shopCoverImage" />
      </Row>
    </template>
    <!-- 藏品信息 -->
    <template #footer>
      <div class="flex flex-col gap-2 w-full">
        <!-- 藏品名字 -->
        {{ collection.shopName }}
        <!-- 藏品限量 -->
        <Row gutter="10">
          <Col>
            <Tag>限量</Tag>
          </Col>
          <Col>
            <Tag> {{ collection.buyLimit }} 份</Tag>
          </Col>
        </Row>
        <!-- Smile 艺术空间 和 价格 -->
        <Row justify="space-between">
          <Col>Smile艺术空间</Col>
          <Col>￥{{ collection.shopPrice }} </Col>
        </Row>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { Row, Col, Tag } from 'vant';
  import type { ICollection } from '@/model/collection';
  import Card from '@/components/Card.vue';

  defineProps<{
    collection: ICollection;
    rounded?: boolean;
  }>();
</script>
