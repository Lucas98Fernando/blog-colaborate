<script lang="ts" setup>
  import { ref, computed } from "vue";
  import {
    simpleValidation,
    passwordStrengthValidation,
  } from "./validations/InputValidations";

  const modelValue = ref<string>("");
  const inputType = ref<string>("password");

  const inputTypeChange = computed(() => {
    return inputType.value === "password" ? "password" : "text";
  });

  function toggleInputType() {
    return inputType.value === "password"
      ? (inputType.value = "text")
      : (inputType.value = "password");
  }
</script>

<template>
  <q-input
    v-model="modelValue"
    v-bind="$attrs"
    :type="inputTypeChange"
    lazy-rules
    outlined
    rounded
    :rules="[...simpleValidation, ...passwordStrengthValidation]"
  >
    <template #prepend>
      <q-icon name="lock_outline" />
    </template>
    <template #append>
      <q-icon
        name="visibility"
        style="cursor: pointer"
        @click="toggleInputType"
      />
    </template>
  </q-input>
</template>
