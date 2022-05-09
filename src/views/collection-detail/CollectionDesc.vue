<template>
  <Card rounded>
    <template #header>
      <span class="text-center w-full">藏品描述</span>
    </template>
    <template #main>
      <p> {{ content }} </p>
    </template>
    <template #footer>
      <!-- 藏品海报 -->
      <Image :src="posterImgUrl" radius="0.75rem" lazy-load />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { Image } from 'vant';

  import Card from '@/components/Card.vue';

  defineProps<{
    content: string;
    posterImgUrl: string;
  }>();
</script>
