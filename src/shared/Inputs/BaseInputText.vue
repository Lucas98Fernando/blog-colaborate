<script lang="ts" setup>
  import { ref } from "vue";
  import { simpleValidation } from "./validations/InputValidations";

  const props = defineProps({
    prependIcon: { type: String, default: "" },
    validationOption: { type: String, default: "" },
  });

  const modelValue = ref<string>("");
</script>

<template>
  <q-input
    v-model="modelValue"
    v-bind="$attrs"
    lazy-rules
    rounded
    outlined
    :rules="simpleValidation"
  >
    <template #prepend>
      <q-icon :name="props.prependIcon" />
    </template>
  </q-input>
</template>
