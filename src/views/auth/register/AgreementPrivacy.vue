<script lang="ts">
  import { defineComponent } from 'vue';
  import { VueComponent } from './markdown/AgreementPrivacy.md';
  import NavLayout from '@/layouts/nav-layout/index.vue';

  export default defineComponent({
    components: {
      AgreementPrivacyMd: VueComponent,
      NavLayout,
    },
  });
</script>

<template>
  <nav-layout nav-bar-title="隐私条款">
    <div class="overflow-y-scroll h-full text-white bg-inherit p-4">
      <agreement-privacy-md />
    </div>
  </nav-layout>
</template>
