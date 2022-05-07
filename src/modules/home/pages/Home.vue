<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { usePostStore } from "@/store/posts/posts";
  import { onMounted } from "vue";

  const postStore = usePostStore();
  const { posts_approved } = storeToRefs(postStore);

  onMounted(() => postStore.getPostsApproved());
</script>

<template>
  <h1>Home</h1>
  <div>{{ posts_approved }}</div>
</template>
