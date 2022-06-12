<script lang="ts" setup>
  import { onMounted, reactive, ref, watch } from "vue";
  import { storeToRefs } from "pinia";
  import { QForm, QSelect, QSelectOption } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { usePostStore } from "@/modules/posts/store/posts";
  import { PostCreateBody, PostResponse } from "../types/posts";

  interface Props {
    data: PostResponse;
  }

  const props = defineProps<Props>();

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

  async function updatePost() {
    try {
      isBtnLoading.value = true;
      let formMultiPart = new FormData();

      Object.entries(formData).forEach(([key, value]) =>
        formMultiPart.append(key, String(value))
      );
      formMultiPart.append("image", imagePost.value || "");

      await postStore
        .ActionUpdatePost(formMultiPart, props.data.id)
        .then(() => (dialog.value = false));
    } finally {
      isBtnLoading.value = false;
    }
  }

  watch(dialog, (value) => {
    if (value) {
      Object.assign(formData, props.data);
      formData.id_category = String(props.data.category.id);
    }
  });

  onMounted(() => loadOptions());
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
            Editar post
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
          label="Atualizar postagem"
          padding="5px 15px"
          rounded
          color="primary"
          :loading="isBtnLoading"
          @click="updatePost"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
