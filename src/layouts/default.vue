<template>
  <div class="flex justify-between gap-4">
    <nav class="p-4 border border-red-300 max-w-[140px] w-full">
      <h3>Navigation</h3>

      <ul>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
        <li>Page 4</li>
      </ul>
    </nav>
    <main class="p-4 border border-red-100 w-full max-w-[1366px]">
      <slot />
    </main>

    <aside class="p-4 border border-red-300 max-w-[280px] w-full">
      {{ userStore.user ?? "Sem dados" }}
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/UserStore";

const userStore = useUserStore();
// const user = computed(() => userStore.user);

onMounted(() => {});
</script>
