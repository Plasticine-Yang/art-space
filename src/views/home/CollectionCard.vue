<template>
  <Row class="rounded-2xl bg-tabbar p-4 gap-4">
    <!-- 发售时间标签 -->
    <Row gutter="10">
      <Col>发售时间</Col>
      <Col>
        <Tag> {{ collection.sellTime }} </Tag>
      </Col>
    </Row>
    <!-- 藏品图片 -->
    <Row>
      <img
        class="w-full rounded-xl object-cover"
        :src="collection.shopCoverImage"
      />
    </Row>
    <!-- 藏品信息 -->
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
  </Row>
</template>

<script setup lang="ts">
  import { Row, Col, Tag } from 'vant';
  import type { ICollection } from '@/model/collection';

  defineProps<{
    collection: ICollection;
  }>();
</script>
