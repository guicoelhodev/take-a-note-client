<script setup lang="ts">
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/vue-3";
// import { blogContent } from "./example";
import { lowlight } from "lowlight";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

const { text } = defineProps<{ text: string }>();

const editor = useEditor({
  extensions: [
    StarterKit,
    Document,
    Paragraph,
    Text,
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ],
  content: text,
});
</script>

<template>
  <ClientOnly fallback="Loading...">
    <div
      class="w-full max-w-[1366px] prose outline-0 border-2 border-red-500 p-4"
      id="menu"
    >
      <BubbleMenu :editor="editor" />
      <FloatingMenu :editor="editor" />
      <editor-content :v-if="editor" :editor="editor" />
    </div>
  </ClientOnly>
</template>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
