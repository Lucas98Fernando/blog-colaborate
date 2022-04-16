<script lang="ts" setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const pathImageLogin = "/images/illustrations/man-works-bg-blue.png";
  const pathImageRegister = "/images/illustrations/girl-with-cup-bg-blue.png";
  const setImage = ref<string>("");

  if (route.path === "/auth/login") setImage.value = pathImageLogin;
  else setImage.value = pathImageRegister;
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
