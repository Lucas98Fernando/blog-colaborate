<script lang="ts" setup>
  import { reactive, ref, watch } from "vue";
  import { QForm } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { AllCategories, CreateCategoriesBody } from "../types/categories";

  interface Props {
    data: AllCategories;
  }

  const props = defineProps<Props>();
  const categoryStore = useCategoryStore();
  const form = ref<QForm | null>(null);
  const dialog = ref<boolean>(false);
  const isBtnLoading = ref<boolean>(false);
  const formData = reactive<CreateCategoriesBody>({
    name: "",
    slug: "",
  });

  async function updateCategory() {
    try {
      isBtnLoading.value = true;
      await categoryStore
        .ActionEditCategory(formData, props.data.id)
        .then(() => (dialog.value = false));
    } finally {
      isBtnLoading.value = false;
    }
  }

  watch(dialog, (value) => {
    if (value) Object.assign(formData, props.data);
  });
</script>

<template>
  <q-btn
    class="btn-action"
    icon="edit"
    color="primary"
    flat
    round
    size="sm"
    @click="dialog = true"
  >
    <q-tooltip> Editar </q-tooltip>
  </q-btn>
  <q-dialog v-model="dialog" maximized>
    <q-card>
      <q-card-section>
        <q-toolbar class="text-primary">
          <q-toolbar-title class="text-weight-bold">
            Editar categoria
          </q-toolbar-title>
          <q-btn
            round
            color="red"
            size="sm"
            icon="close"
            @click="dialog = false"
          >
            <q-tooltip> Fechar </q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form ref="form" class="q-gutter-sm">
          <base-input-text
            v-model="formData.name"
            label="Nome"
            placeholder="Ex: VueJS?"
            prepend-icon="text_fields"
          />

          <base-input-text
            v-model="formData.slug"
            label="Slug"
            placeholder="Ex: vue-js"
            prepend-icon="link"
          />
        </q-form>

        <q-btn
          class="q-mt-sm"
          label="Atualizar categoria"
          padding="5px 15px"
          rounded
          color="primary"
          :loading="isBtnLoading"
          @click="updateCategory"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
