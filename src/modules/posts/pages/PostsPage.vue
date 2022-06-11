<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { storeToRefs } from "pinia";
  import postsColumns from "./PostsColumns";
  import CreatePost from "../components/CreatePost.vue";
  import { usePostStore } from "../store/posts";
  import eventBus from "@/helpers/eventBus";

  const columns = postsColumns;
  const postsStore = usePostStore();
  const { posts_by_user } = storeToRefs(postsStore);

  const filter = ref<string>("");
  const loading = ref<boolean>(true);

  eventBus.addEventListener("fetch-posts", () => fetchPosts());

  async function fetchPosts() {
    try {
      await postsStore.ActionGetPostsByUser();
    } finally {
      loading.value = false;
    }
  }

  function setStatusText(status: number) {
    return { 1: "Aguardando aprovação", 2: "Aprovado" }[status];
  }

  function setStatusColor(status: number) {
    return { 1: "warning", 2: "green" }[status];
  }

  function setStatusTextColor(status: number) {
    return { 1: "black", 2: "white" }[status];
  }

  function openImage(url: string) {
    window.open(`${import.meta.env.VITE_API_URL}/uploads/${url}`, "_blank");
  }

  onMounted(() => fetchPosts());
</script>

<template>
  <q-card class="q-mt-sm card-rounded">
    <q-table
      :rows="posts_by_user"
      :columns="columns"
      :filter="filter"
      :loading="loading"
      no-data-label="Nenhum post encontrado"
      :no-results-label="`Nenhuma postagem encontrada com: ${filter}`"
      loading-label="Carregando posts, aguarde..."
      row-key="name"
    >
      <template #top>
        <q-input
          v-model="filter"
          outlined
          rounded
          dense
          placeholder="Pesquisar postagem..."
        >
          <template #prepend>
            <q-icon name="search" />
          </template>

          <template #append>
            <q-icon name="close" class="cursor-pointer" @click="filter = ''" />
          </template>
        </q-input>

        <q-space />

        <create-post />
      </template>

      <template #body="props">
        <q-tr :props="props" class="tr-posts">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="category" :props="props">
            {{ props.row.category.name }}
          </q-td>
          <q-td key="status" :props="props">
            <q-badge
              class="q-py-sm q-px-sm"
              :class="`text-${setStatusTextColor(props.row.status)}`"
              :color="setStatusColor(props.row.status)"
              rounded
            >
              {{ setStatusText(props.row.status) }}
            </q-badge>
          </q-td>
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="image" :props="props">
            <q-btn
              color="primary"
              label="Ver imagem"
              size="sm"
              icon-right="open_in_new"
              outline
              rounded
              @click="openImage(props.row.image)"
            />
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td key="actions" :props="props">
            <q-btn
              class="btn-edit"
              icon="edit"
              color="primary"
              flat
              round
              size="sm"
            >
              <q-tooltip> Editar </q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<style lang="scss" scoped>
  .btn-edit {
    display: none;
  }

  .tr-posts:hover .btn-edit {
    display: inline;
  }
</style>
