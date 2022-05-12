<script setup lang="ts">
  import { reactive, ref, toRefs } from 'vue';

  import { useRouter } from 'vue-router';

  import { Form, Field, CellGroup, Button, Toast, Notify } from 'vant';
  import type { FormInstance } from 'vant';

  import { PageRoutes } from '@/enums/page';
  import { sendVarifyCode, retrievePassword } from '@/api';
  import type { IRetrievePasswordData } from '@/api/modules/auth/types';

  // data

  // 找回密码表单
  const retrievePasswordForm = reactive<IRetrievePasswordData>({
    email: '',
    varifyCode: '',
    passWord: '',
  });

  const { email, varifyCode, passWord } = toRefs(retrievePasswordForm);

  // 确认密码
  const confirmPassword = ref('');

  // 控制发送验证码按钮加载状态
  const isSendVarifyCodeBtnLoading = ref(false);
  // 发送验证码按钮加载状态下的文字
  const sendVarifyCodeBtnLoadingText = ref('');

  const retrievePasswordFormRef = ref<FormInstance>();

  const router = useRouter();

  // methods

  /**
   * @description 找回密码表单提交
   */
  const onSubmit = () => {
    // 提交注册表单请求
    retrievePassword(retrievePasswordForm).then(() => {
      Toast.success('修改成功，快去登录叭~');

      router.replace(PageRoutes.LOGIN);
    });
  };

  // 发送验证码按钮点击后的回调
  const handleSendVarifyCodeBtnClick = async () => {
    try {
      // 邮箱校验通过后才会发送验证码
      await retrievePasswordFormRef.value!.validate('email');

      // 发送 API 请求
      await sendVarifyCode(email.value);

      // 将按钮置为倒计时且不可点击状态
      isSendVarifyCodeBtnLoading.value = true;

      // 提示发送成功
      Toast.success('发送成功');

      // 60 秒倒计时
      let count = 60;
      let interval = setInterval(() => {
        sendVarifyCodeBtnLoadingText.value = `${count--}秒后重新发送`;
        if (count <= 0) {
          clearInterval(interval);
          isSendVarifyCodeBtnLoading.value = false;
        }
      }, 1000);
    } catch (e: any) {
      Notify({ type: 'danger', message: e?.message });
    }
  };
</script>

<template>
  <div class="p-6 bg-inherit">
    <h1 class="mb-8">找回密码</h1>
    <Form ref="retrievePasswordFormRef" @submit="onSubmit">
      <CellGroup :border="false" inset>
        <Field
          v-model="email"
          label="邮箱"
          name="email"
          placeholder="请输入邮箱"
          :rules="[
            { required: true, message: '请填写邮箱' },
            {
              pattern:
                /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
              message: '邮箱格式不正确',
            },
          ]"
        />
        <Field
          v-model="varifyCode"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <Button
              size="small"
              type="primary"
              :disabled="isSendVarifyCodeBtnLoading"
              :loading="isSendVarifyCodeBtnLoading"
              :loading-text="sendVarifyCodeBtnLoadingText"
              @click="handleSendVarifyCodeBtnClick"
              >发送验证码</Button
            >
          </template></Field
        >
        <Field
          v-model="passWord"
          label="密码"
          autocomplete="password"
          placeholder="请输入密码"
          type="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <Field
          v-model="confirmPassword"
          label="确认密码"
          autocomplete="username"
          placeholder="再次输入密码"
          type="password"
          :rules="[
            { required: true, message: '请填写确认密码' },
            {
              validator: (value) => value === passWord,
              message: '两次输入的密码不一致',
            },
          ]"
        />
      </CellGroup>

      <!-- 提交找回密码表单按钮 -->
      <div class="mt-8">
        <Button class="w-full" round type="primary" native-type="submit"
          >确定</Button
        >
      </div>
    </Form>
  </div>
</template>
