<script setup lang="ts">
import { BubbleMenu } from "@tiptap/vue-3";

const { editor } = defineProps<{ editor: any }>();

console.log(editor);
</script>

<template>
  <bubble-menu :v-if="editor" :editor="editor">
    <section class="bg-white flex gap-4 p-2 rounded-md shadow-lg">
      <BubbleMenuButton
        icon="tabler:bold"
        @click="editor.chain().focus().toggleBold().run()"
        :data-active="editor.isActive('bold')"
      />

      <BubbleMenuButton
        icon="tabler:italic"
        @click="editor.chain().focus().toggleItalic().run()"
        :data-active="editor.isActive('italic')"
      />

      <BubbleMenuButton
        icon="ri:strikethrough"
        @click="editor.chain().focus().toggleStrike().run()"
        :data-active="editor.isActive('strike')"
      />
    </section>
  </bubble-menu>
</template>
