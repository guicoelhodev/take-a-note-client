<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { blogContent } from "./example.ts";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  content: blogContent,
  extensions: [StarterKit],
});
</script>

<template>
  <div class="w-full max-w-[1366px] prose">
    <editor-content :editor="editor" class="" />
  </div>
</template>
