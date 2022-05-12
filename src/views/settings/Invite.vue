<script setup lang="ts">
  import { ActionSheet, Notify, ImagePreview } from 'vant';
  import type { ActionSheetAction } from 'vant';
  import { computed } from 'vue';
  import qrcode from 'qrcode';
  import useClipboard from 'vue-clipboard3';

  const props = defineProps<{
    // 是否显示动作面板
    modelValue: boolean;
  }>();

  const emit = defineEmits(['update:modelValue']);

  // data

  // 实现 v-model
  const showActionSheet = computed<boolean>({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });

  // 动作面板中的选项
  const actionList: ActionSheetAction[] = [
    { name: '复制邀请链接' },
    { name: '二维码分享' },
    { name: '查看邀请规则' },
  ];

  // 邀请好友二维码的内容
  const inviteUrl = 'plasticine';

  // 剪贴板 API
  const { toClipboard } = useClipboard();

  // methods
  const onSelect = (action: ActionSheetAction, index: number) => {
    switch (index) {
      // 复制邀请链接
      case 0:
        toClipboard(inviteUrl)
          .then(() => {
            Notify({
              type: 'success',
              message: '复制成功，快去分享给朋友注册叭~',
            });
          })
          .catch((reason) => {
            Notify({
              type: 'danger',
              message: `复制失败 -- ${reason}`,
            });
          });
        showActionSheet.value = false;
        break;
      case 1:
        // 二维码分享 -- 弹出二维码图片
        qrcode.toDataURL('plasticine').then((qrcodeUrl) => {
          ImagePreview({
            images: [qrcodeUrl],
            showIndex: false,
          });
        });
        break;
      case 2:
        // 查看邀请规则 -- 弹出邀请规则海报
        ImagePreview({
          images: [
            'https://unsplash.com/photos/1Yp0azwksVg/download?ixid=MnwxMjA3fDB8MXxhbGx8Mzh8fHx8fHwyfHwxNjUyMzM3MDI1&force=true',
          ],
          showIndex: false,
        });
        break;
    }
  };
</script>

<template>
  <ActionSheet
    v-model:show="showActionSheet"
    :actions="actionList"
    @select="onSelect"
  />
</template>
