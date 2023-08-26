<template>
  <floating-menu
    :editor="editor"
    :tippy-options="{ duration: 100 }"
    :shouldShow="
      ({ state }) => state.selection.$from.nodeBefore?.textContent === '/'
    "
    class="bg-zinc-50 p-1 rounded-md shadow-lg flex flex-col items-start"
    v-if="editor"
  >
    <ul
      class="p-0 m-0 flex flex-col gap-[2px] max-h-48 overflow-y-scroll no-scrollbar"
    >
      <FloatingMenuButton
        v-for="(button, index) in buttons"
        :title="button.title"
        :subtitle="button.subtitle"
        :icon="button.icon"
        @click="button.onClick()"
      />
    </ul>
  </floating-menu>
</template>

<script setup lang="ts">
import { FloatingMenu } from "@tiptap/vue-3";
const { editor } = defineProps<{ editor: any }>();

type IButton = {
  title: string;
  subtitle: string;
  icon: string;
  onClick: () => void;
};

const buttons: IButton[] = [
  {
    title: "Bullets",
    subtitle: "Create bullet list",
    icon: "fluent-mdl2:radio-bullet",
    onClick: () => editor.chain().focus().toggleBulletList().run(),
  },
  {
    title: "Order list",
    subtitle: "Create an ordered list",
    icon: "teenyicons:list-ordered-solid",
    onClick: () => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    title: "Heading 1",
    subtitle: "Large section title",
    icon: "lucide:heading-1",
    onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    title: "Heading 2",
    subtitle: "Medium section title",
    icon: "lucide:heading-2",
    onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    title: "Heading 3",
    subtitle: "Small section title",
    icon: "lucide:heading-3",
    onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    title: "Code",
    subtitle: "Create code block",
    icon: "teenyicons:code-solid",
    onClick: () => editor.chain().focus().toggleCodeBlock().run(),
  },
];
</script>
