<script lang="ts">
  import { defineComponent } from 'vue';
  import { VueComponent } from './markdown/AgreementRegisteration.md';
  import NavLayout from '@/layouts/nav-layout/index.vue';

  export default defineComponent({
    components: {
      AgreementRegisterationMd: VueComponent,
      NavLayout,
    },
  });
</script>

<template>
  <nav-layout nav-bar-title="smill艺术空间注册协议">
    <div class="overflow-y-scroll h-full text-white bg-inherit p-4">
      <agreement-registeration-md />
    </div>
  </nav-layout>
</template>
