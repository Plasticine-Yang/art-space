<script setup lang="ts">
  import LogoTitle from '@/components/LogoTitle.vue';
  import Card from '@/components/Card.vue';
  import LoginForm from './LoginForm.vue';
  import { PageRoutes } from '@/enums/page';
</script>

<template>
  <div class="flex flex-col items-center py-12 px-4">
    <LogoTitle />
    <Card class="mt-10" padding="2rem 1rem" gap="2rem" rounded>
      <!-- 标题 -->
      <template #header>
        <h2 class="font-normal text-center w-full">欢迎回来</h2>
      </template>
      <!-- 登录表单 -->
      <template #main>
        <LoginForm />
      </template>
      <!-- 注册、忘记密码 -->
      <template #footer>
        <div class="flex justify-between">
          <router-link :to="PageRoutes.REGISTER">立即注册</router-link>
          <router-link :to="PageRoutes.RETRIEVE_PASSWORD"
            >忘记密码？</router-link
          >
        </div>
      </template>
    </Card>
  </div>
</template>
