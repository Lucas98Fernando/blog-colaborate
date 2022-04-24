<script lang="ts" setup>
  import { ref, computed } from "vue";
  import {
    simpleValidation,
    passwordStrengthValidation,
  } from "./validations/InputValidations";

  const modelValue = ref<string>("");
  const inputType = ref<string>("password");

  const inputTypeChange = computed(() =>
    inputType.value === "password" ? "password" : "text"
  );

  const inputIcon = computed(() =>
    inputType.value === "password" ? "visibility_off" : "visibility"
  );

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
    :rules="[...simpleValidation, ...passwordStrengthValidation]"
    lazy-rules
    outlined
    rounded
  >
    <template #prepend>
      <q-icon name="lock_outline" />
    </template>
    <template #append>
      <q-icon
        :name="inputIcon"
        style="cursor: pointer"
        @click="toggleInputType"
      />
    </template>
  </q-input>
</template>
