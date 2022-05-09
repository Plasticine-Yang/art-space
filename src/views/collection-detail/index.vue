<template>
  <div class="bg-inherit">
    <NavTabLayout :nav-bar-title="collection?.shopName">
      <div class="flex flex-col gap-2 p-2">
        <!-- 藏品卡片信息 -->
        <CollectionCard v-if="collection" :collection="collection" rounded />
        <!-- 藏品描述 -->
        <CollectionDesc
          v-if="collection?.shopDec"
          :content="collection.shopDec"
          :poster-img-url="collection.shopLink"
        />
      </div>
      <!-- 提交订单操作栏 -->
      <template #tabbar>
        <SubmitBar
          :price="submitBarPrice"
          :button-color="primaryColor"
          button-text="购买"
          button-type="primary"
          text-align="left"
          label="价格"
          @submit="onSubmit"
        ></SubmitBar>
      </template>
    </NavTabLayout>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { useRoute, useRouter } from 'vue-router';

  import { SubmitBar } from 'vant';

  import { getCollectionById } from '@/api';

  import type { ICollection } from '@/model/collection';
  import { primaryColor } from '@/config/vant/themeConfig';
  import CollectionCard from '@/components/collection/CollectionCard.vue';
  import CollectionDesc from './CollectionDesc.vue';
  import NavTabLayout from '@/layouts/nav-tab-layout/index.vue';

  // data
  const route = useRoute();
  const router = useRouter();
  const collection = ref<ICollection>();
  const submitBarPrice = ref(0);

  // methods
  onMounted(() => {
    // 根据 id 去请求藏品详细信息
    const id = Number(route.params.id);
    getCollectionById(id).then((res) => {
      res = res as ICollection;

      collection.value = res;

      // 提交订单操作栏的价格需要用单分位的格式
      submitBarPrice.value = collection.value.shopPrice * 100;
    });
  });

  const onSubmit = () => {
    // 跳转到支付页面
    router.push('/pay');
  };
</script>
