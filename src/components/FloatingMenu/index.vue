<template>
  <floating-menu
    :editor="editor"
    :tippy-options="{ duration: 100 }"
    v-if="editor"
  >
    <button
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
      H1
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
      H2
    </button>
    <button
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
    >
      Bullet List
    </button>
  </floating-menu>
</template>

<script setup lang="ts">
import { FloatingMenu } from "@tiptap/vue-3";
const { editor } = defineProps<{ editor: any }>();
</script>
