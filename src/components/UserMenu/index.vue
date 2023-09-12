<template>
  <div class="p-4 absolute top-0 right-0">
    <img
      :v-if="!dropdownOpen"
      class="rounded-full w-14 h-14 aspect-square cursor-pointer"
      :src="user?.avatar_url"
      alt="user avatar image"
      @click="dropdownOpen = !dropdownOpen"
    />

    <section
      v-if="dropdownOpen"
      class="dropdown w-[340px] h-screen bg-red-100 absolute top-0 right-0 p-4"
    >
      <header class="flex items-center justify-around gap-4">
        <p
          class="text-xl truncate text-ellipsis overflow-hidden"
          :title="user?.full_name"
        >
          {{ user?.full_name }}
        </p>
        <img
          class="rounded-full w-14 h-14 aspect-square cursor-pointer"
          :src="user?.avatar_url"
          alt="user avatar image"
          @click="dropdownOpen = !dropdownOpen"
          title="click to close user menu"
        />
      </header>

      <ul class="flex flex-col gap-4 pt-8">
        <li class="flex items-center gap-2">
          <Icon icon="tdesign:mode-dark" width="24px" height="24px" />
          Light mode
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { IUser } from "~/models/User";
import { Icon } from "@iconify/vue";

const { user } = defineProps<{ user: IUser | null }>();
const dropdownOpen = ref(false);
</script>

<style scoped>
@keyframes show {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.dropdown {
  animation: show 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
