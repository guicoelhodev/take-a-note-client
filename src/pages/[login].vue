<template>
  <div>
    <h1>Login session</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const route = useRoute();

const jwt = getJwtToken(route.hash);

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

onMounted(async () => {
  const { data } = (await fetchUserLogin()) as any;

  console.log(data.logIn);
});
</script>
