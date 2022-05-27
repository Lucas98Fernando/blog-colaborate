<script lang="ts" setup>
  import { onMounted, reactive, ref } from "vue";
  import { storeToRefs } from "pinia";
  import { QForm, QSelect, QSelectOption } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { usePostStore } from "@/modules/posts/store/posts";
  import { PostCreateBody } from "../types/posts";

  const categoryStore = useCategoryStore();
  const { categories_all } = storeToRefs(categoryStore);

  const postStore = usePostStore();

  const form = ref<QForm | null>(null);

  const dialog = ref<boolean>(false);

  const categoryOptions = ref<QSelectOption[]>([]);

  const isSelectLoading = ref<boolean>(false);
  const isBtnLoading = ref<boolean>(false);

  const imagePost = ref<File>();

  const formData = reactive<PostCreateBody>({
    title: "",
    description: "",
    id_category: "",
    slug: "",
  });

  function loadOptions() {
    categories_all.value.forEach((category) => {
      categoryOptions.value.push({
        label: category.name,
        value: String(category.id),
      });
    });
  }

  async function fetchCategories() {
    try {
      isSelectLoading.value = true;
      if (categories_all.value.length > 0) loadOptions();
      else {
        await categoryStore.ActionGetAllCategories();
        loadOptions();
      }
    } finally {
      isSelectLoading.value = false;
    }
  }

  async function createPost() {
    try {
      isBtnLoading.value = true;
      let formMultiPart = new FormData();

      Object.entries(formData).forEach(([key, value]) =>
        formMultiPart.append(key, String(value))
      );
      formMultiPart.append("image", imagePost.value || "");

      await postStore.ActionCreatePost(formMultiPart);
    } finally {
      isBtnLoading.value = false;
    }
  }

  onMounted(() => fetchCategories());
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

          <base-input-text
            v-model="formData.slug"
            label="Slug"
            placeholder="Ex: voce-conhece-o-vue"
            prepend-icon="link"
          />

          <q-select
            v-model="formData.id_category"
            class="q-mb-lg"
            label="Categoria"
            rounded
            outlined
            emit-value
            map-options
            :options="categoryOptions"
            :loading="isSelectLoading"
          >
            <template #prepend>
              <q-icon name="category" />
            </template>
            <template #no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhuma categoria encontrada
                </q-item-section>
              </q-item>
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

          <q-file
            v-model="imagePost"
            label="Imagem do post"
            style="max-width: 300px"
            accept=".jpg, image/*"
            outlined
            rounded
          >
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-form>
      </q-card-section>

      <q-card-actions>
        <q-btn
          label="Criar postagem"
          padding="5px 15px"
          rounded
          color="primary"
          :loading="isBtnLoading"
          @click="createPost"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
