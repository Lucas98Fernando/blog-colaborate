<script lang="ts" setup>
  import { ref } from "vue";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { AllCategories } from "../types/categories";

  interface Props {
    data: AllCategories;
  }

  const categoryStore = useCategoryStore();
  const props = defineProps<Props>();
  const dialog = ref<boolean>(false);
  const isBtnLoading = ref<boolean>(false);

  async function deleteCategory() {
    try {
      isBtnLoading.value = true;
      await categoryStore.ActionDeleteCategory(props.data.id);
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
          Você deseja realmente excluir a categoria
          <strong>{{ props.data.name }}</strong> ?
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
          @click="deleteCategory"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
