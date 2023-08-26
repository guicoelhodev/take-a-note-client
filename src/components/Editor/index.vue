<script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import { blogContent } from "./example.ts";
import { lowlight } from "lowlight";
import { Icon } from "@iconify/vue";

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

export default {
  components: {
    EditorContent,
    Icon,
  },

  data() {
    return {
      editor: null,
      isEditable: true,
    };
  },

  watch: {
    isEditable(value) {
      this.editor.setEditable(value);
    },
  },

  mounted() {
    this.editor = new Editor({
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
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<template>
  <ClientOnly fallback="Loading...">
    <div class="w-full max-w-[1366px] prose outline-0" id="menu">
      <BubbleMenu :editor="editor" />
      <editor-content :v-if="editor" :editor="editor" />
    </div>
  </ClientOnly>
</template>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
