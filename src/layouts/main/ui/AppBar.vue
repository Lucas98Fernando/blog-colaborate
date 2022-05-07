<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import Logout from "@/modules/auth/partials/Logout.vue";

  const route = useRoute();
  const currentRouteName = route.meta?.title;
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>{{ currentRouteName }}</q-toolbar-title>
      <logout />
    </q-toolbar>
  </q-header>
</template>
