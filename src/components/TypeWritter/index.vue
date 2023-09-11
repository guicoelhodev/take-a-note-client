<template>
  <article>
  </article>
</template>

<script setup lang="ts">
const { text } = defineProps({
  text: String,
  class: String,
})
</script>

<style scoped>
  .typingEffect {
    width: 0;
    overflow: hidden; 
    border-right: 2px solid white;
    font-size: 16px;
    white-space: nowrap;
    animation: typing 20s steps(30) forwards, blink 1s infinite;
  }

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: white;
  }
}
</style>