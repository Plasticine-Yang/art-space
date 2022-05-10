<script setup lang="ts">
  import LogoTitle from '@/components/LogoTitle.vue';
  import Card from '@/components/Card.vue';
  import LoginForm from './LoginForm.vue';
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
    </Card>
  </div>
</template>
