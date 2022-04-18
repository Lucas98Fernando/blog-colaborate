<script lang="ts" setup>
  import { ref } from "vue";
  import { simpleValidation } from "./validations/InputValidations";

  const props = defineProps({
    prependIcon: { type: String, default: "" },
    validationOption: { type: String, default: "" },
    noValidation: { type: Boolean, default: false },
  });

  const modelValue = ref<string>("");
</script>

<template>
  <q-input
    v-model="modelValue"
    v-bind="$attrs"
    :rules="!noValidation ? simpleValidation : []"
    lazy-rules
    rounded
    outlined
  >
    <template #prepend>
      <q-icon :name="props.prependIcon" />
    </template>
  </q-input>
</template>
