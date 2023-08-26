<script setup lang="ts">
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/vue-3";
import { blogContent } from "./example";
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
  content: blogContent,
});
</script>

<template>
  <ClientOnly fallback="Loading...">
    <div class="w-full max-w-[1366px] prose outline-0" id="menu">
      <BubbleMenu :editor="editor" />
      <FloatingMenu :editor="editor" />
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
      <editor-content :v-if="editor" :editor="editor" />
    </div>
  </ClientOnly>
</template>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
