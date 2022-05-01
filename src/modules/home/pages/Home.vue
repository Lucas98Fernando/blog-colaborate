<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { usePostStore } from "@/store/posts/posts";
  import { onMounted } from "vue";
  import { authStore } from "@/modules/auth/store/auth";

  const postStore = usePostStore();
  const { posts_approved } = storeToRefs(postStore);

  const auth = authStore();

  function logout() {
    auth.ActionLogout();
  }

  onMounted(() => postStore.getPostsApproved());
</script>

<template>
  <h1>Home</h1>
  <div>{{ posts_approved }}</div>
  <q-btn color="red" @click="logout">Sair</q-btn>
</template>
