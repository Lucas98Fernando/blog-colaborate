<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import columns from "./CategoriesColumns";
  import { useCategoryStore } from "../store/categories";
  import { storeToRefs } from "pinia";
  import eventBus from "@/helpers/eventBus";
  import CreateCategory from "../components/CreateCategory.vue";
  import EditCategory from "../components/EditCategory.vue";
  import DeleteCategory from "../components/DeleteCategory.vue";

  const categoriesStore = useCategoryStore();
  const { categories_all } = storeToRefs(categoriesStore);
  const filter = ref<string>("");
  const loading = ref<boolean>(true);

  eventBus.addEventListener("fetch-categories", () => fetchCategories());

  async function fetchCategories() {
    try {
      await categoriesStore.ActionGetAllCategories();
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => fetchCategories());
</script>

<template>
  <q-card class="q-mt-sm card-rounded">
    <q-table
      :rows="categories_all"
      :columns="columns"
      :filter="filter"
      :loading="loading"
      no-data-label="Nenhuma categoria encontrada"
      :no-results-label="`Nenhuma postagem encontrada com: ${filter}`"
      loading-label="Carregando categorias, aguarde..."
      row-key="name"
    >
      <template #top>
        <q-input
          v-model="filter"
          outlined
          rounded
          dense
          placeholder="Pesquisar categoria..."
        >
          <template #prepend>
            <q-icon name="search" />
          </template>

          <template #append>
            <q-icon name="close" class="cursor-pointer" @click="filter = ''" />
          </template>
        </q-input>

        <q-space />

        <create-category />
      </template>

      <template #body="props">
        <q-tr :props="props" class="tr-data-table">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="slug" :props="props">
            {{ props.row.slug }}
          </q-td>
          <q-td key="actions" :props="props">
            <edit-category :data="props.row" />
            <delete-category :data="props.row" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>
