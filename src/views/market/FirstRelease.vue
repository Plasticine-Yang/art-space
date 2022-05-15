<script setup lang="ts">
  import { Grid, GridItem } from 'vant';
  import Card from '@/components/Card.vue';
  import FilterBar from './components/FilterBar.vue';
  import { ICommodity } from '@/model/commodity';

  defineProps<{
    commodityList: ICommodity[];
  }>();
</script>

<template>
  <div class="pb-8">
    <FilterBar />
    <Grid :column-num="2" :gutter="2" :border="false">
      <GridItem v-for="commodity in commodityList" :key="commodity.id">
        <Card rounded>
          <template #header>
            <van-image radius="10" :src="commodity.cover" />
          </template>
          <template #main>
            <span>{{ commodity.title }}</span>
          </template>
        </Card>
      </GridItem>
    </Grid>
  </div>
</template>
