<script setup lang="ts">
// const query = gql`
//   query users {
//     createdAt
//     name
//   }
// `;
const query = gql`
  query Query {
    users {
      name
    }
  }
`;

const { data } = await useAsyncQuery<{ users: { name: string }[] }>(query);

onMounted(() => {
  console.log("oi", data);
});
</script>
<template>
  <ul>
    <li v-for="user in data.users" :key="user.name">{{ user.name }}</li>
  </ul>
  <Editor />
</template>
