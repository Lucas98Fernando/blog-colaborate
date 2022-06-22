<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useCategoryStore } from "@/modules/categories/store/categories";
  import { AllCategories } from "@/modules/categories/types/categories";

  const categoryStore = useCategoryStore();
  const { categories_all } = storeToRefs(categoryStore);
  const categoryOptions = ref<AllCategories[]>([]);

  function loadOptions() {
    categoryOptions.value = categories_all.value;
  }

  async function fetchCategories() {
    if (categories_all.value.length > 0) loadOptions();
    else {
      await categoryStore.ActionGetAllCategories();
      loadOptions();
    }
  }

  onMounted(() => fetchCategories());
</script>

<template>
  <div class="q-pa-sm q-ma-sm">
    <q-item-label header>Categorias</q-item-label>
    <q-list dense bordered separator padding class="rounded-borders">
      <q-item
        v-for="(category, index) in categoryOptions"
        :key="index"
        clickable
      >
        <q-item-section> {{ category.name }} </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style lang="scss" scoped>
  .categories {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
  }
</style>
