<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import NavbarSection from "../sections/NavbarSection.vue";
  import HeaderSection from "../sections/HeaderSection.vue";
  import LastPosts from "../sections/LastPosts.vue";
  import CategoriesAside from "../sections/CategoriesAside.vue";
  import { usePostStore } from "@/modules/posts/store/posts";
  import { Post } from "@/modules/posts/types/posts";

  const postsStore = usePostStore();
  const posts = ref<Post[]>([]);

  async function fetchPosts() {
    await postsStore
      .ActionGetPostsApproved()
      .then((data) => (posts.value = data.posts));
  }

  onMounted(() => fetchPosts());
</script>

<template>
  <main class="main">
    <navbar-section />
    <header-section :data="posts" />
    <div class="container">
      <div>
        <last-posts :data="posts" />
      </div>
      <categories-aside />
    </div>
  </main>
</template>
