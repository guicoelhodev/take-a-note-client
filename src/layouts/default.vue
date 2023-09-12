<template>
  <div class="flex justify-between gap-4 overflow-hidden">
    <nav class="p-4 border border-red-300 max-w-[200px] w-full">
      <h3>Navigation</h3>

      <ul>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
        <li>Page 4</li>
      </ul>
    </nav>
    <main class="p-4 border border-red-100 w-full max-w-[1366px]">
      <slot />
    </main>

    <UserMenu :user="userStore.user" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/UserStore";

const userStore = useUserStore();
const { mutate: fetchUserLogin, error } = useMutation(
  gql`
    mutation LogIn($jwtToken: String!) {
      logIn(jwtToken: $jwtToken) {
        avatar_url
        email
        full_name
        user_name
        id
      }
    }
  `
);

const getUserInfoBasedOnSavedToken = async () => {
  if (!localStorage.getItem("@take_a_note:token")) return navigateTo("/");

  if (userStore.user) return;

  const userData = await fetchUserLogin({
    jwtToken: localStorage.getItem("@take_a_note:token"),
  }).catch((error) => {
    alert(error);
    navigateTo("/");
    return;
  });

  userStore.handleUserInfo(userData?.data.logIn);
};
onMounted(async () => {
  await getUserInfoBasedOnSavedToken();
});
</script>
