<template>
  <div>
    <h1>Login session</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  console.log(route.hash);
});
</script>
