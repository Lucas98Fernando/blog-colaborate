<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { QForm } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { CreateCategoriesBody } from "../types/categories";

  const categoryStore = useCategoryStore();
  const form = ref<QForm | null>(null);
  const dialog = ref<boolean>(false);
  const isBtnLoading = ref<boolean>(false);
  const formData = reactive<CreateCategoriesBody>({
    name: "",
    slug: "",
  });

  function resetFormFields() {
    Object.keys(formData).forEach(
      (key) => (formData[key as keyof CreateCategoriesBody] = "")
    );
  }

  function resetFormValidation() {
    form.value?.resetValidation();
  }

  async function createCategory() {
    try {
      isBtnLoading.value = true;
      await categoryStore.ActionCreateCategory(formData).then(() => {
        resetFormFields();
        resetFormValidation();
      });
    } finally {
      isBtnLoading.value = false;
    }
  }
</script>

<template>
  <q-btn color="primary" rounded @click="dialog = true">
    Nova categoria
    <q-icon size="1.3rem" right name="add" />
  </q-btn>
  <q-dialog v-model="dialog" maximized>
    <q-card>
      <q-card-section>
        <q-toolbar class="text-primary">
          <q-toolbar-title class="text-weight-bold">
            Criar categoria
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
          label="Criar categoria"
          padding="5px 15px"
          rounded
          color="primary"
          :loading="isBtnLoading"
          @click="createCategory"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
