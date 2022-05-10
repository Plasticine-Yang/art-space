<script setup lang="ts">
  import { useUserStore } from '@/store/modules/user';
  import { Form, CellGroup, Field, Button } from 'vant';
  import { ref } from 'vue';

  // data
  const username = ref('');
  const password = ref('');
  const showPassword = ref(false);
  // 邮箱匹配正则表达式
  const emailPattern =
    /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  // 手机号正则表达式
  const phonePattern =
    /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

  // 用户名校验器
  const usernameValidator = (value: any) => {
    if (!emailPattern.test(value) && !phonePattern.test(value)) {
      return '请输入正确的邮箱或手机号';
    }

    return true;
  };

  const userStore = useUserStore();

  // methods

  // 提交登录表单回调
  const handleSubmit = () => {
    // 登录逻辑交给 userStore 的 login action 去处理
    userStore.login(
      { username: username.value, password: password.value },
      true,
    );
  };

  // 点击显示或隐藏密码
  const handleShowPasswordClick = () => {
    showPassword.value = !showPassword.value;
  };
</script>

<template>
  <Form class="test" @submit="handleSubmit">
    <CellGroup :border="false" inset>
      <Field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入邮箱或手机号"
        :rules="[
          {
            required: true,
            message: '请输入邮箱或手机号',
            validator: usernameValidator,
          },
        ]"
      />
      <Field
        v-model="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :type="showPassword ? 'text' : 'password'"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <!-- 显示密码小图标 -->
        <template #right-icon>
          <van-icon
            class-prefix="iconfont"
            :name="showPassword ? 'eye' : 'eye-close'"
            @click="handleShowPasswordClick"
          />
        </template>
      </Field>
    </CellGroup>
    <div class="mt-8">
      <Button round block type="primary" native-type="submit">登录</Button>
    </div>
  </Form>
</template>
