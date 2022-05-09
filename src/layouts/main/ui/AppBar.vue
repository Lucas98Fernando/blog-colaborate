<script lang="ts" setup>
  import Logout from "@/modules/auth/partials/Logout.vue";
  import { routeState } from "./routeState";
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>{{ routeState }}</q-toolbar-title>
      <logout />
    </q-toolbar>
  </q-header>
</template>
