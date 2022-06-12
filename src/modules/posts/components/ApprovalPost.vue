<script lang="ts" setup>
  import { ref } from "vue";
  import { Post } from "../types/posts";

  interface Props {
    data: Post;
  }

  const props = defineProps<Props>();

  const dialog = ref<boolean>(false);
</script>

<template>
  <q-btn
    class="btn-action"
    icon="check"
    color="green"
    flat
    round
    size="sm"
    @click="dialog = true"
  >
    <q-tooltip> Aprovar </q-tooltip>
  </q-btn>
  <q-dialog v-model="dialog">
    <q-card class="card-rounded">
      <q-card-section class="row items-center">
        <q-avatar icon="fact_check" color="green" text-color="white" />
        <span class="q-ml-sm">
          Você deseja realmente aprovar a postagem
          <strong>{{ props.data.title }}</strong> ?
        </span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="grey-14" rounded />
        <q-btn
          v-close-popup
          label="Aprovar"
          color="green"
          padding="4px 18px"
          rounded
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
