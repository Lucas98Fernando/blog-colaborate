<script lang="ts" setup>
  import BaseDialog from "@/shared/dialogs/BaseDialog.vue";
</script>

<template>
  <q-layout>
    <base-dialog />
    <router-view :key="$route.fullPath" />
  </q-layout>
</template>
