<script lang="ts" setup>
  import { computed, ref } from "vue";
  import {
    simpleValidation,
    emailValidation,
  } from "./validations/InputValidations";

  const modelValue = ref<string>("");

  const props = defineProps({
    prependIcon: { type: String, default: "" },
    validationType: { type: String, default: "" },
  });

  const setValidation = computed(() => {
    if (props.validationType === "email")
      return [...simpleValidation, ...emailValidation];
    if (props.validationType === "none") return [];
    else return [...simpleValidation];
  });

  const setDefaultSpacing = computed(() => {
    if (props.validationType === "none") return "q-mb-lg";
    else return "";
  });
</script>

<template>
  <q-input
    v-model="modelValue"
    v-bind="$attrs"
    :class="setDefaultSpacing"
    :rules="setValidation"
    lazy-rules
    rounded
    outlined
  >
    <template #prepend>
      <q-icon :name="props.prependIcon" />
    </template>
  </q-input>
</template>
