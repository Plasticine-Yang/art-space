<script setup lang="ts"></script>

<template>
  <van-row class="text-xs">
    <!-- 我的藏品 -->
    <van-col span="6">
      <div class="flex flex-col items-center">
        <van-icon name="gift-o" size="26" />
        <span class="mt-2">我的藏品</span>
      </div>
    </van-col>
    <!-- 我的钱包 -->
    <van-col span="6">
      <div class="flex flex-col items-center">
        <van-icon name="paid" size="26" />
        <span class="mt-2">我的钱包</span>
      </div>
    </van-col>
    <!-- 我的订单 -->
    <van-col span="6">
      <div class="flex flex-col items-center">
        <van-icon name="orders-o" size="26" />
        <span class="mt-2">我的订单</span>
      </div>
    </van-col>
    <!-- 我的收藏 -->
    <van-col span="6">
      <div class="flex flex-col items-center">
        <van-icon name="like-o" size="26" />
        <span class="mt-2">我的收藏</span>
      </div>
    </van-col>
  </van-row>
</template>
