<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { blogContent } from "./example.ts";
import { lowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
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

const editor = useEditor({
  content: blogContent,
  extensions: [
    StarterKit,
    Document,
    Paragraph,
    Text,
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ],
});
</script>

<template>
  <div class="w-full max-w-[1366px] prose outline-0">
    <editor-content :editor="editor" />
  </div>
</template>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
