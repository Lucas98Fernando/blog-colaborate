<script lang="ts" setup>
  import storage from "@/helpers/storage";
  import { ref } from "vue";
  import { usePostStore } from "../store/posts";
  import { postsFilterOptions } from "./FilterOptions";

  const emits = defineEmits(["showLoading", "hideLoading"]);
  const filterSelected = ref(0);
  const postsStore = usePostStore();

  function fetchPosts() {
    try {
      emits("showLoading");
      switch (filterSelected.value) {
        case 0:
          return storage.isAdmin()
            ? postsStore.ActionGetPostsAll()
            : postsStore.ActionGetPostsByUser();
        case 1:
          return storage.isAdmin()
            ? postsStore.ActionGetPostsWaitingApproval
            : postsStore.ActionGetPostsWaitingApprovalByUser();
        case 2:
          return storage.isAdmin()
            ? postsStore.ActionGetPostsApproved()
            : postsStore.ActionGetPostsApprovedByUser();
      }
    } finally {
      emits("hideLoading");
    }
  }
</script>

<template>
  <q-select
    v-model="filterSelected"
    label="Filtrando por"
    dense
    rounded
    outlined
    emit-value
    map-options
    :options="postsFilterOptions"
    @update:model-value="fetchPosts"
  >
    <template #prepend>
      <q-icon name="sort" />
    </template>
  </q-select>
</template>
