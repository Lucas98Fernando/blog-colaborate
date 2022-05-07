<script lang="ts" setup>
  import NavigationDrawer from "./ui/NavigationDrawer.vue";
  import AppBar from "./ui/AppBar.vue";
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <navigation-drawer />
    <app-bar />
    <!-- this is where the Pages are injected -->
    <q-page-container class="q-mx-lg">
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>
