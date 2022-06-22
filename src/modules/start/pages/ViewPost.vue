<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import NavbarSection from "../sections/NavbarSection.vue";
  import CategoriesAside from "../sections/CategoriesAside.vue";
  import { usePostStore } from "@/modules/posts/store/posts";
  import { onMounted, ref } from "vue";
  import { Post } from "@/modules/posts/types/posts";

  const route = useRoute();
  const postsStore = usePostStore();
  const postData = ref<Post>();
  const loading = ref<boolean>(true);
  const image = import.meta.env.DEV
    ? "https://cdn.quasar.dev/img/parallax2.jpg"
    : `${import.meta.env.VITE_API_URL}/${route.query.image}}`;

  async function fetchData() {
    try {
      await postsStore
        .ActionGetPostById(Number(route.query.id))
        .then((data) => (postData.value = data));
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => fetchData());
</script>

<template>
  <main class="main">
    <navbar-section />
    <div class="row">
      <q-img :src="image" :ratio="16 / 9" height="400px" />
    </div>
    <div class="container">
      <div v-if="loading" class="container-loading">
        <q-spinner color="primary" size="3em" />
        <span>Carregando dados da postagem, aguarde...</span>
      </div>
      <div v-else>
        <h3>{{ postData?.title }}</h3>
        <p>{{ postData?.description }}</p>
      </div>
      <categories-aside />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .container-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      margin-top: 1rem;
    }
  }
</style>
