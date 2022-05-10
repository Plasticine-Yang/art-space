<script setup lang="ts">
  import {
    SubmitBar,
    Cell,
    CellGroup,
    Radio,
    RadioGroup,
    Field,
    Popup,
    Checkbox,
  } from 'vant';

  import NavTabLayout from '@/layouts/nav-tab-layout/index.vue';
  import { primaryDarkColor } from '@/config/vant/themeConfig';
  import { ref } from 'vue';

  // data
  const payWay = ref<'alipay' | 'wallet'>('alipay'); // 支付方式
  // 藏品详情
  const collectionInfo = ref({
    // 藏品封面图片
    coverImg:
      'https://unsplash.com/photos/5NX5x2-O7KU/download?ixid=MnwxMjA3fDF8MXxhbGx8MzF8fHx8fHwyfHwxNjUyMDkyMjM0&force=true',
    title: '太平有象',
    // 藏品库存 -- 展示的时候是 藏品库存/藏品限量
    stock: 666,
    // 藏品限量
    limit: 1000,
  });
  const buyCount = ref(1); // 购买数量
  const orderBuyLimit = ref(1); // 订单下单限购量
  const orderBuyErrorMsg = ref(''); // 订单限量的错误信息
  const isAgree = ref(false); // 是否同意服务协议
  const showAgree = ref(false); // 展示服务协议
  const price = 66600; // 订单价格

  // methods
  // 点击支付按钮的回调
  const onSubmit = () => {
    console.log('submit');
  };

  // 购买数量变化时的回调
  const onBuyCountChange = (value: string) => {
    const buyCountValue = parseInt(value);
    if (!buyCountValue) {
      // 至少得买一个
      buyCount.value = 1;
    }

    if (buyCountValue > orderBuyLimit.value) {
      // 超出限购量时给出错误提示
      orderBuyErrorMsg.value = '超出限购量';
    } else {
      orderBuyErrorMsg.value = '';
    }
  };
</script>

<template>
  <NavTabLayout nav-bar-title="订单支付">
    <!-- 支付方式 -->
    <RadioGroup v-model="payWay">
      <CellGroup title="支付方式">
        <!-- 支付宝支付 -->
        <Cell
          title="支付宝支付"
          icon="alipay"
          clickable
          :border="false"
          @click="payWay = 'alipay'"
        >
          <template #right-icon>
            <Radio name="alipay" />
          </template>
        </Cell>
        <!-- 钱包支付 -->
        <Cell
          title="钱包支付"
          icon="card"
          clickable
          :border="false"
          @click="payWay = 'wallet'"
        >
          <template #right-icon>
            <Radio name="wallet" />
          </template>
        </Cell>
      </CellGroup>
    </RadioGroup>

    <!-- 订单详情 -->
    <CellGroup title="订单详情">
      <!-- 藏品详情 -->
      <Cell center>
        <template #title>
          <div class="flex items-center">
            <!-- 藏品封面 -->
            <VanImage
              :src="collectionInfo.coverImg"
              height="5rem"
              fit="cover"
              position="center"
            />
            <!-- 藏品标题和数量 -->
            <div class="ml-4">
              <p> {{ collectionInfo.title }} </p>
              <p># {{ collectionInfo.stock }} / {{ collectionInfo.limit }} </p>
            </div>
          </div>
        </template>
      </Cell>
      <!-- 藏品购买数量 -->
      <Field
        v-model="buyCount"
        label="购买数量"
        input-align="right"
        error-message-align="right"
        type="digit"
        center
        :error-message="orderBuyErrorMsg"
        @update:model-value="onBuyCountChange"
      />
    </CellGroup>

    <!-- 服务协议 -->
    <CellGroup title="服务须知：不支持申请退款，收货后结算">
      <Cell>
        <template #title>
          <Checkbox v-model="isAgree">
            <div class="flex">
              <span class="text-main-text-color">我已同意</span>
              <span class="text-primary" @click="showAgree = true"
                >《服务协议》</span
              >
              <Popup v-model:show="showAgree"> 协议 </Popup>
            </div>
          </Checkbox>
        </template>
      </Cell>
    </CellGroup>
    <!-- 底部插槽内容 -->
    <template #tabbar>
      <SubmitBar
        :price="price"
        :button-color="primaryDarkColor"
        button-text="支付"
        button-type="primary"
        text-align="left"
        label="价格"
        @submit="onSubmit"
      ></SubmitBar>
    </template>
  </NavTabLayout>
</template>
