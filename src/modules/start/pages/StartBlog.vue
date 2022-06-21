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

<style lang="scss" scoped>
  .main {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem;
    border: 2px solid red;
    position: relative;
    .container {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
