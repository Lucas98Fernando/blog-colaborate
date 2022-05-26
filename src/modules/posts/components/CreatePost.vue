<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { QForm, QSelect } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";

  const form = ref<QForm | null>(null);

  const dialog = ref<boolean>(false);

  const categorySelected = ref("");
  const categoryOptions = ref<QSelect[]>([]);

  const formData = reactive({
    title: "",
    description: "",
  });

  // async function fetchCategories() {}
</script>

<template>
  <q-btn color="primary" rounded @click="dialog = true">
    Nova postagem
    <q-icon size="1.3rem" right name="add" />
  </q-btn>
  <q-dialog v-model="dialog" maximized>
    <q-card>
      <q-card-section>
        <q-toolbar class="text-primary">
          <q-toolbar-title class="text-weight-bold">
            Criar post
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
            v-model="formData.title"
            label="Título"
            placeholder="Ex: Você conhece o Vue.js?"
            prepend-icon="text_fields"
          />

          <q-select
            v-model="categorySelected"
            class="q-mb-lg"
            label="Categorias"
            rounded
            outlined
            :options="categoryOptions"
          >
            <template #prepend>
              <q-icon name="category" />
            </template>
          </q-select>

          <q-input
            v-model="formData.description"
            class="q-mb-lg"
            label="Conteúdo"
            outlined
            rounded
            type="textarea"
          />

          <q-uploader
            class="card-rounded"
            style="max-width: 300px"
            label="Imagem do post"
            accept=".jpg, image/*"
          />
        </q-form>
      </q-card-section>

      <q-card-actions>
        <q-btn
          v-close-popup
          label="Criar postagem"
          padding="5px 15px"
          rounded
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
