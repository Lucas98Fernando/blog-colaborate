<script lang="ts">
  import { onMounted, ref } from "vue";
  import { storeToRefs } from "pinia";
  import postsColumns from "./PostsColumns";
  import CreatePost from "../components/CreatePost.vue";
  import { usePostStore } from "../store/posts";

  const columns = postsColumns;
  const postsStore = usePostStore();
  const { posts_by_user } = storeToRefs(postsStore);

  const filter = ref<string>("");
  const loading = ref<boolean>(true);

  async function fetchPosts() {
    try {
      await postsStore.ActionGetPostsByUser();
    } finally {
      loading.value = false;
    }
  }

  export default {
    components: { CreatePost },
    setup() {
      onMounted(() => fetchPosts());

      return {
        columns,
        posts_by_user,
        filter,
        loading,
      };
    },
  };
</script>

<template>
  <q-card class="q-mt-sm card-rounded">
    <q-table
      :rows="posts_by_user"
      :columns="columns"
      :filter="filter"
      :loading="loading"
      no-data-label="Nenhum post encontrado"
      loading-label="Carregando posts, aguarde..."
      row-key="name"
    >
      <template #top>
        <q-input
          v-model="filter"
          outlined
          rounded
          dense
          placeholder="Pesquisar algo..."
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
      <!-- <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props">
            <q-badge color="green">
              {{ props.row.calories }}
            </q-badge>
          </q-td>
          <q-td key="fat" :props="props">
            <q-badge color="purple">
              {{ props.row.fat }}
            </q-badge>
          </q-td>
          <q-td key="carbs" :props="props">
            <q-badge color="orange">
              {{ props.row.carbs }}
            </q-badge>
          </q-td>
          <q-td key="protein" :props="props">
            <q-badge color="primary">
              {{ props.row.protein }}
            </q-badge>
          </q-td>
          <q-td key="sodium" :props="props">
            <q-badge color="teal">
              {{ props.row.sodium }}
            </q-badge>
          </q-td>
          <q-td key="calcium" :props="props">
            <q-badge color="accent">
              {{ props.row.calcium }}
            </q-badge>
          </q-td>
          <q-td key="iron" :props="props">
            <q-badge color="amber">
              {{ props.row.iron }}
            </q-badge>
          </q-td>
        </q-tr>
      </template> -->
    </q-table>
  </q-card>
</template>
