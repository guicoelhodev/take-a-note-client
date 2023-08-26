<template>
  <button :@click="click">
    <Icon :icon="icon" />
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

type IProps = {
  icon: string;
  click: ((payload: MouseEvent) => void) | undefined;
};
const { icon, click } = defineProps<IProps>();

console.log(icon);
</script>
