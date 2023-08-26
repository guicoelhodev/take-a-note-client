<script setup lang="ts">
import { Icon } from "@iconify/vue";

type IProps = {
  icon: string;
  click: ((payload: MouseEvent) => void) | undefined;
};
const { icon, click } = defineProps<IProps>();
</script>

<template>
  <button :@click="click" class="data-[active=true]:text-red-400 font-bold">
    <Icon :icon="icon" />
  </button>
</template>
