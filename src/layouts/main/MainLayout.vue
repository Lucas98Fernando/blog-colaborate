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
      <router-view v-slot="{ Component, route }" appear>
        <transition
          :enter-active-class="`animate__animated ${
            route.meta.transition.enterClass || 'fade'
          }`"
          :leave-active-class="`animate__animated ${
            route.meta.transition.leaveClass || 'fade'
          }`"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
