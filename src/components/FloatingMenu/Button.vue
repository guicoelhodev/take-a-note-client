<template>
  <button class="flex gap-2 items-center bg-white min-w-[200px]">
    <Icon :icon="props.icon" class="w-10 h-6" />
    <div class="flex flex-col text-left p-2">
      <span class="text-sm text-bold">{{ props.title }}</span>
      <span class="text-xs text-zinc-400">{{ props.subtitle }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  title: String,
  subtitle: String,
  icon: String,
});
</script>
