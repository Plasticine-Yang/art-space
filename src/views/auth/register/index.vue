<script setup lang="ts">
  import {
    Form,
    Field,
    CellGroup,
    Checkbox,
    Button,
    Toast,
    Notify,
  } from 'vant';
  import type { FormInstance } from 'vant';
  import { reactive, ref, toRefs } from 'vue';
  import { PageRoutes } from '@/enums/page';
  import type { IRegisterData } from '@/api/modules/auth/types';
  import { sendVarifyCode, register } from '@/api';
  import { useRouter } from 'vue-router';

  // data

  // 注册表单
  const registerForm = reactive<IRegisterData>({
    email: '',
    userName: '',
    inviteUser: '',
    passWord: '',
    phone: '',
    varifyCode: '',
  });

  const { email, userName, inviteUser, passWord, phone, varifyCode } =
    toRefs(registerForm);

  // 确认密码
  const confirmPassword = ref('');
  // 是否统一隐私协议
  const privacyAgreement = ref(false);

  // 注册表单组件实例
  const registerFormRef = ref<FormInstance>();

  // 控制发送验证码按钮加载状态
  const isSendVarifyCodeBtnLoading = ref(false);
  // 发送验证码按钮加载状态下的文字
  const sendVarifyCodeBtnLoadingText = ref('');

  const router = useRouter();

  // methods

  /**
   * @description 注册表单提交
   */
  const onSubmit = () => {
    if (!privacyAgreement.value) {
      Notify({ type: 'danger', message: '请勾选注册协议和隐私条款' });
    } else {
      // 提交注册表单请求
      register(registerForm).then(() => {
        Toast.success('注册成功！');

        router.replace(PageRoutes.LOGIN);
      });
    }
  };

  // 发送验证码按钮点击后的回调
  const handleSendVarifyCodeBtnClick = async () => {
    try {
      // 邮箱校验通过后才会发送验证码
      await registerFormRef.value!.validate('email');

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
    <h1 class="mb-8">注册</h1>
    <Form ref="registerFormRef" @submit="onSubmit">
      <CellGroup :border="false" inset>
        <Field
          v-model="userName"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <Field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            {
              pattern:
                /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
              message: '手机号格式不正确',
            },
          ]"
        />
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
        <Field v-model="inviteUser" label="邀请码" placeholder="选填" />
      </CellGroup>

      <!-- 隐私协议 -->
      <Checkbox v-model="privacyAgreement" class="mt-8">
        <span class="text-xs text-main-text-color">
          我已阅读并接受
          <router-link
            class="text-primary"
            :to="PageRoutes.AGREEMENT_REGISTERATION"
            >《smill艺术空间注册协议》</router-link
          >
          及
          <router-link class="text-primary" :to="PageRoutes.AGREEMENT_PRIVACY"
            >《隐私条款》</router-link
          >
        </span>
      </Checkbox>

      <!-- 提交注册表单按钮 -->
      <div class="mt-8">
        <Button class="w-full" round type="primary" native-type="submit"
          >确认注册</Button
        >
      </div>
    </Form>
  </div>
</template>
