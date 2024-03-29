<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { QForm } from "quasar";
  import { authStore } from "@/modules/auth/store/auth";
  import { RegisterRequest } from "../types/auth";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";
  import {
    simpleValidation,
    passwordStrengthValidation,
  } from "@/shared/inputs/validations/InputValidations";
  import NavigateBetweenPages from "../partials/NavigateBetweenPages.vue";

  const form = ref<QForm | null>(null);
  const isBtnLoading = ref<boolean>(false);

  const auth = authStore();

  const formData = reactive<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });

  const passwordConfirm = ref<string>("");

  function validate() {
    return form.value?.validate().then((success) => {
      if (success) handlerRegister();
      else alert("Algo deu errado!");
    });
  }

  async function handlerRegister() {
    try {
      isBtnLoading.value = true;
      await auth.ActionRegister(formData);
    } finally {
      isBtnLoading.value = false;
    }
  }

  const passwordMatch = [
    (val: string) => val === formData.password || "As senhas não coincidem",
  ];
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Criar conta</h5>
  <div class="q-mb-lg">Cadastre-se gratuitamente</div>
  <q-form ref="form" class="q-gutter-sm" @submit.prevent="validate">
    <base-input-text
      v-model="formData.name"
      label="Nome"
      placeholder="Ex: Lucas Fernando"
      prepend-icon="person_outline"
    />

    <base-input-text
      v-model="formData.email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      prepend-icon="mail_outline"
      validation-type="email"
    />

    <base-input-password v-model="formData.password" label="Senha" />

    <base-input-password
      v-model="passwordConfirm"
      label="Confirmar senha"
      :rules="[
        ...simpleValidation,
        ...passwordStrengthValidation,
        ...passwordMatch,
      ]"
    />

    <div>
      <q-btn
        class="full-width"
        rounded
        type="submit"
        padding="12px 0"
        color="primary"
        label="Cadastrar"
        :loading="isBtnLoading"
      >
        <template #loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>

    <navigate-between-pages
      text="Já possui conta?"
      to="/auth/login"
      label-link="Entrar"
    />
  </q-form>
</template>
