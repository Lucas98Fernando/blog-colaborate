<script lang="ts" setup>
  import Logout from "@/modules/auth/partials/Logout.vue";
  import { routeState } from "./routeState";
</script>

<template>
  <q-header class="app-bar-header">
    <q-toolbar class="q-px-lg">
      <q-toolbar-title class="text-primary text-weight-bold">
        {{ routeState }}
      </q-toolbar-title>
      <logout />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
  .app-bar-header {
    background-color: var(--white-dark);
  }
</style>
