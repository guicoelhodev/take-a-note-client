<template>
  <p>sdjhdsjh</p>
</template>

<script lang="ts" setup>
import { IUser } from "~/models/User";
import { useUserStore } from "~/store/UserStore";

type IUserResponse = {
  data: {
    logIn: IUser & { __typename: string };
  };
};

const route = useRoute();
const jwt = getJwtToken(route.hash);

const userStore = useUserStore();

const { mutate: fetchUserLogin } = useMutation(
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
});

onMounted(async () => {
  const {
    data: { logIn },
  } = (await fetchUserLogin({
    jwtToken: jwt["#access_token"],
  })) as IUserResponse;

  localStorage.setItem("@take_a_note:token", jwt["#access_token"]);

  userStore.handleUserInfo(logIn);
  return navigateTo("/app");
});
</script>
