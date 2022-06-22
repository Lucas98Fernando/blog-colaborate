<script lang="ts" setup>
  import { Post } from "@/modules/posts/types/posts";
  import { useRouter } from "vue-router";

  interface Props {
    data: Post[];
  }

  const props = defineProps<Props>();
  const router = useRouter();

  function seeMore(props: Post) {
    const keysToKeep = ["id", "title", "slug"];
    const filterProps = Object.entries(props).filter(([key]) =>
      keysToKeep.includes(key)
    );

    let query = {};

    filterProps.forEach(([key, value]) => (query = { ...query, [key]: value }));

    router.push({ path: "/view-post", query });
  }

  function addZeroIfNecessary(date: number) {
    const dateFormated = String(date);
    return dateFormated.length === 1 ? `0${dateFormated}` : dateFormated;
  }

  function datePublication(props: Post) {
    const createdAt = new Date(props.createdAt);
    const getDate = createdAt.toLocaleDateString();
    const getHours = addZeroIfNecessary(createdAt.getHours());
    const getMinutes = addZeroIfNecessary(createdAt.getMinutes());
    return `Publicado em: ${getDate} às ${getHours}:${getMinutes}`;
  }
</script>

<template>
  <q-card
    v-for="(post, index) in props.data"
    :key="index"
    class="card-rounded q-mt-md"
    flat
    bordered
  >
    <q-card-section horizontal>
      <q-card-section class="col-6 q-pt-xs">
        <div class="text-overline">{{ post.category.name }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ post.title }}</div>
        <div class="text-caption text-grey">
          {{ post.description }}
        </div>
        <q-btn
          class="q-mt-md"
          color="primary"
          padding="4px 18px"
          rounded
          @click="seeMore(post)"
        >
          Ver mais
          <q-icon size="1.3rem" right name="open_in_new" />
        </q-btn>
      </q-card-section>

      <q-card-section class="col-6 flex flex-center">
        <q-img
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <div class="q-py-sm q-mx-sm text-grey">
        {{ datePublication(post) }}
      </div>
    </q-card-actions>
  </q-card>
</template>
