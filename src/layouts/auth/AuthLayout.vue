<script lang="ts" setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const setImage = computed(() => {
    const basePath = "/images/illustrations";
    return {
      Login: `${basePath}/man-works-bg-blue.png`,
      Register: `${basePath}/girl-with-cup-bg-blue.png`,
      ForgotPassword: `${basePath}/boy-writing-to-notebook-bg-blue.png`,
      RecoverAccount: `${basePath}/boy-writing-to-notebook-bg-blue.png`,
    }[String(route.name)];
  });
</script>

<template>
  <div class="auth-container">
    <div class="content-left">
      <img class="auth-image" :src="setImage" alt="Imagem de autenticação" />
    </div>
    <div class="content-right">
      <div class="card-auth q-pa-md">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
