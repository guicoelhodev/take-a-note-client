<script setup lang="ts">
  import { useUserStore } from '~/store/UserStore'

  const userStore = useUserStore();
</script>
<template>

  {{ userStore.user }}
  <!-- <Editor /> -->
</template>
