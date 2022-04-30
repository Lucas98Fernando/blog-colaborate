<script lang="ts" setup>
  const props = defineProps({
    text: { type: String, default: "" },
    to: { type: String, default: "" },
    labelLink: { type: String, default: "" },
  });
</script>

<template>
  <div class="q-mt-lg q-ml-md">
    <span>
      {{ props.text }}
      <router-link :to="props.to">{{ props.labelLink }}</router-link>
    </span>
  </div>
</template>
