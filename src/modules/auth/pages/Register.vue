<script lang="ts" setup>
  import { reactive, ref, watchEffect } from "vue";
  import { QForm } from "quasar";
  import { authStore } from "@/modules/auth/store/auth";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";
  import {
    simpleValidation,
    passwordStrengthValidation,
  } from "@/shared/inputs/validations/InputValidations";

  const form = ref<QForm | null>(null);
  const isBtnLoading = ref<boolean>(false);
  const auth = authStore();
  const formData = reactive({
    name: "",
    email: "",
    password: "",
  });
  const passwordConfirm = ref<string>("");
  const isPasswordMatch = ref<boolean>(false);

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

  watchEffect(() => {
    isPasswordMatch.value = formData.password === passwordConfirm.value;
  });

  const passwordMatch = ref([
    () => isPasswordMatch.value || "As senhas não coicidem",
  ]);
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

    <base-input-password
      v-model="formData.password"
      label="Senha"
      :rules="[
        ...simpleValidation,
        ...passwordStrengthValidation,
        ...passwordMatch,
      ]"
    />

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

    <div class="q-mt-lg q-ml-md">
      <span>
        Já possui conta ?
        <router-link to="/auth/login">Entrar</router-link>
      </span>
    </div>
  </q-form>
</template>
