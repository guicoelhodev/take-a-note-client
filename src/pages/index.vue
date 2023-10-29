<template>
  <div class="h-screen flex flex-col items-stretch">
    <section
      class="w-full h-full flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-6xl text-neutral-600 font-bold">
        Welcome to <b class="text-red-500">Take a Note</b>
      </h1>

      <h3 class="text-center text-2xl text-gray-400">
        A simple tool based on the most famous editor <br />
        totally free to use!
      </h3>

      <article
        v-if="!PROD.length"
        class="w-full max-w-[600px] pt-4 flex justify-center gap-4"
      >
        <button
          class="bg-zinc-900 text-white py-2 px-4 rounded-md flex gap-2 items-center"
          @click="sendJwtToken('github')"
        >
          <Icon icon="mdi:github" color="white" width="30px" />
          Log In with Github
        </button>
        <button
          class="bg-zinc-50 py-2 px-4 rounded-md flex gap-2 items-center border border-zinc-900"
          @click="sendJwtToken('google')"
        >
          <Icon icon="flat-color-icons:google" color="white" width="30" />
          Log In with Google
        </button>
      </article>

      <article v-else="PROD.length">
        <button
          class="bg-red-500 text-white py-2 px-4 rounded-md flex gap-2 items-center border border-red-500 text-lg"
          @click="navigateTo('/production')"
        >
          View demo preview
        </button>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

type IResponseSend = {
  data: {
    sendJwtToken: string;
  };
};

const {
  public: { PROD },
} = useRuntimeConfig();
const { mutate: sendJwtTokenMutation } = useMutation(gql`
  mutation Mutation($provider: String!) {
    sendJwtToken(provider: $provider)
  }
`);

const sendJwtToken = async (provider: "github" | "google") => {
  const {
    data: { sendJwtToken },
  } = (await sendJwtTokenMutation({
    provider,
  })) as IResponseSend;

  window.open(sendJwtToken, "_self");
};

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

definePageMeta({
  layout: false,
  // middleware: ["redirect"],
});

onMounted(async () => {
  if (!!PROD) return;
  const userData = await fetchUserLogin({
    jwtToken: localStorage.getItem("@take_a_note:token"),
  });
  if (userData?.data?.logIn) return navigateTo("/app");
});
</script>
