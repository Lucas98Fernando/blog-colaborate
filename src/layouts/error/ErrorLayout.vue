<script lang="ts" setup>
  const props = defineProps({
    srcImage: { type: String, default: "" },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
  });
</script>

<template>
  <div class="error-container">
    <div class="content-left">
      <h4 class="q-my-sm text-primary text-weight-bold">
        {{ props.title }}
      </h4>
      <div class="q-mb-md">{{ props.message }}</div>
      <q-btn color="primary" rounded to="/home">
        <q-icon size="1.3rem" left name="arrow_back" />
        Voltar para o início
      </q-btn>
    </div>
    <div class="content-right">
      <img :src="props.srcImage" alt="Imagem do erro" />
    </div>
  </div>
</template>
