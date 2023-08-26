<script setup lang="ts">
import { Icon } from "@iconify/vue";

type IProps = {
  icon: string;
};
const { icon } = defineProps<IProps>();
</script>

<template>
  <button class="data-[active=true]:text-red-400 font-bold">
    <Icon :icon="icon" />
  </button>
</template>
