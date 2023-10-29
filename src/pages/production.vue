<template>
  <section class="max-w-[1366px] w-full mx-auto flex flex-col p-4 gap-4">
    <aside class="self-end" @click="navigateTo('/')">
      <button class="bg-zinc-800 text-white py-2 px-4 rounded-md">
        Go to home page
      </button>
    </aside>

    <Editor />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
