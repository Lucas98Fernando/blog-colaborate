<script lang="ts" setup>
  import { ref } from "vue";
  import { authStore } from "../store/auth";

  const auth = authStore();

  const dialog = ref<boolean>(false);

  function logout() {
    auth.ActionLogout();
  }
</script>

<template>
  <q-btn color="red" rounded @click="dialog = true">
    <q-icon size="1.3rem" left name="logout" />
    Sair
  </q-btn>
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="logout" color="red" text-color="white" />
        <span class="q-ml-sm"> Você deseja realmente sair da aplicação? </span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="grey-8" />
        <q-btn flat label="Sair" color="red" rounded @click="logout" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
