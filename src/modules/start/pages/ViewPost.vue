<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import NavbarSection from "../sections/NavbarSection.vue";
  import CategoriesAside from "../sections/CategoriesAside.vue";

  const route = useRoute();
</script>

<template>
  <main class="main">
    <navbar-section />
    <div class="container">
      <div>
        <h1>{{ route.query.title }}</h1>
      </div>
      <categories-aside />
    </div>
  </main>
</template>
