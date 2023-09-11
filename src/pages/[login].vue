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
  `,
  {
    variables: {
      jwtToken: jwt["#access_token"],
    },
  }
);

definePageMeta({
  layout: false,
});

onMounted(async () => {
  const {
    data: { logIn },
  } = (await fetchUserLogin()) as IUserResponse;
  localStorage.setItem("@take_a_note:token", jwt["#access_token"]);
  localStorage.setItem("@take_a_note:expires_at", jwt.expires_at);

  userStore.handleUserInfo(logIn);
  return navigateTo("/app");
});
</script>
