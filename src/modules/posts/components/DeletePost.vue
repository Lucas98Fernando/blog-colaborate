<script lang="ts" setup>
  import { ref } from "vue";
  import { usePostStore } from "@/modules/posts/store/posts";
  import { Post } from "../types/posts";

  interface Props {
    data: Post;
  }

  const postStore = usePostStore();
  const props = defineProps<Props>();
  const dialog = ref<boolean>(false);
  const isBtnLoading = ref<boolean>(false);

  async function deletePost() {
    try {
      isBtnLoading.value = true;
      await postStore.ActionDeletePost(props.data.id);
    } finally {
      isBtnLoading.value = false;
    }
  }
</script>

<template>
  <q-btn
    class="btn-action"
    icon="delete"
    color="red"
    flat
    round
    size="sm"
    @click="dialog = true"
  >
    <q-tooltip> Excluir </q-tooltip>
  </q-btn>
  <q-dialog v-model="dialog">
    <q-card class="card-rounded">
      <q-card-section class="row items-center">
        <q-avatar icon="delete_forever" color="red" text-color="white" />
        <span class="q-ml-sm">
          Você deseja realmente excluir a postagem
          <strong>{{ props.data.title }}</strong> ?
        </span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="grey-14" rounded />
        <q-btn
          v-close-popup
          label="Excluir"
          color="red"
          padding="4px 18px"
          :loading="isBtnLoading"
          rounded
          @click="deletePost"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
