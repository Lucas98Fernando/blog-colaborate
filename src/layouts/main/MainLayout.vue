<script lang="ts" setup>
  const name = "Main";
</script>

<template>
  <q-layout>
    <h1>{{ name }}</h1>
    <!-- this is where the Pages are injected -->
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>
