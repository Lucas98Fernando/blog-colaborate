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
  <q-btn color="red" rounded outline @click="dialog = true">
    <q-icon size="1.3rem" name="logout" />
    <q-tooltip> Sair </q-tooltip>
  </q-btn>
  <q-dialog v-model="dialog" persistent>
    <q-card class="card-rounded">
      <q-card-section class="row items-center">
        <q-avatar icon="logout" color="red" text-color="white" size="3em" />
        <span class="q-ml-sm"> Você deseja realmente sair da aplicação? </span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat rounded label="Cancelar" color="grey-8" />
        <q-btn flat label="Sair" color="red" rounded @click="logout" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
