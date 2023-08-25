<script>
// import { BubbleMenu, Editor, useEditor } from "@tiptap/vue-3";
// import { blogContent } from "./example.ts";
// import { lowlight } from "lowlight";

// import Document from "@tiptap/extension-document";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";
// import StarterKit from "@tiptap/starter-kit";
// import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

// import css from "highlight.js/lib/languages/css";
// import js from "highlight.js/lib/languages/javascript";
// import ts from "highlight.js/lib/languages/typescript";
// import html from "highlight.js/lib/languages/xml";
// import "highlight.js/styles/atom-one-dark.css";

// lowlight.registerLanguage("html", html);
// lowlight.registerLanguage("css", css);
// lowlight.registerLanguage("js", js);
// lowlight.registerLanguage("ts", ts);

// const editor = useEditor({
//   content: blogContent,
//   extensions: [
//     StarterKit,
//     Document,
//     Paragraph,
//     Text,
//     CodeBlockLowlight.configure({
//       lowlight,
//     }),
//     BubbleMenu.configure({
//       element: document?.querySelector(".menu"),
//     }),
//   ],
// });
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/vue-3";
import { blogContent } from "./example.ts";
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

export default {
  components: {
    EditorContent,
    BubbleMenu,
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
      <bubble-menu
        v-if="editor"
        :editor="editor"
        class="bg-blue-100 flex gap-4 py-1 px-2 rounded-md"
      >
        <button @click="editor.chain().focus().toggleBold().run()">bold</button>
        <button @click="editor.chain().focus().toggleItalic().run()">
          italic
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()">
          strike
        </button>
      </bubble-menu>
      <editor-content :editor="editor" />
    </div>
  </ClientOnly>
</template>

<style>
.ProseMirror:focus {
  outline: none;
}
</style>
