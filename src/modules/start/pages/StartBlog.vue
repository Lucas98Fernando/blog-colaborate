<script lang="ts" setup>
  import NavbarSection from "../sections/NavbarSection.vue";
  import HeaderSection from "../sections/HeaderSection.vue";
  import LastPosts from "../sections/LastPosts.vue";
  import CategoriesAside from "../sections/CategoriesAside.vue";
</script>

<template>
  <main class="main">
    <navbar-section />
    <header-section />
    <div class="container">
      <last-posts />
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
