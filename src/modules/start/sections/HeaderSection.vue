<script lang="ts" setup>
  import { ref } from "vue";
  import { Post } from "@/modules/posts/types/posts";

  interface Props {
    data: Post[];
  }

  const props = defineProps<Props>();
  const slide = ref<number>(1);
  const autoplay = ref<boolean>(true);

  function setImagePost(imgPath: string) {
    return import.meta.env.DEV
      ? "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
      : `${import.meta.env.VITE_API_URL}/${imgPath}}`;
  }
</script>

<template>
  <q-carousel
    v-model="slide"
    arrows
    animated
    infinite
    height="400px"
    :autoplay="autoplay"
  >
    <q-carousel-slide
      v-for="(post, index) in props.data"
      :key="index"
      :name="index + 1"
      :img-src="setImagePost(post.image)"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">{{ post.title }}</div>
        <div class="text-subtitle1">{{ post.description }}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style lang="scss" scoped>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
