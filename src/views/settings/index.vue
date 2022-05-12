<script setup lang="ts">
  import { CellGroup, Cell, Button } from 'vant';
  import NavLayout from '@/layouts/nav-layout/index.vue';
  import { useUserStore } from '@/store/modules/user';
  import Invite from './Invite.vue';
  import { ref } from 'vue';

  // data
  const userStore = useUserStore();
  const showInviteAction = ref(false);

  // methods
  const handleLogoutClick = () => {
    userStore.logout();
  };
</script>

<template>
  <NavLayout nav-bar-title="用户设置">
    <div class="flex flex-col px-6 pt-12">
      <CellGroup inset>
        <Cell title="邀请好友" @click="showInviteAction = true" />
        <Cell title="账户安全" />
        <Cell title="关于我们" />
        <Cell title="我的客服" />
      </CellGroup>
    </div>

    <!-- 邀请好友动作面板 -->
    <Invite v-model="showInviteAction" />

    <div class="fixed bottom-10 w-full box-border px-6">
      <Button round type="danger" class="w-full" @click="handleLogoutClick"
        >退出登录</Button
      >
    </div>
  </NavLayout>
</template>
