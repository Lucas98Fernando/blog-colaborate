<script lang="ts" setup>
  import { onMounted, reactive, ref } from "vue";
  import { QForm } from "quasar";
  import { authStore } from "@/modules/auth/store/auth";
  import { RecoverAccountRequest } from "../types/auth";
  import { useRoute } from "vue-router";
  import {
    simpleValidation,
    passwordStrengthValidation,
  } from "@/shared/inputs/validations/InputValidations";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";
  import NavigateBetweenPages from "./partials/NavigateBetweenPages.vue";

  const form = ref<QForm | null>(null);
  const isBtnLoading = ref<boolean>(false);
  const showLoading = ref<boolean>(true);

  const auth = authStore();
  const route = useRoute();

  const tokenParams = String(route.params.token);

  const formData = reactive<RecoverAccountRequest>({
    token: tokenParams,
    email: "",
    password: "",
  });

  const passwordConfirm = ref<string>("");

  function validate() {
    return form.value?.validate().then((success) => {
      if (success) handlerRecoverAccount();
      else alert("Algo deu errado!");
    });
  }

  async function handlerRecoverAccount() {
    try {
      isBtnLoading.value = true;
      await auth.ActionRecoverAccount(formData, tokenParams);
    } finally {
      isBtnLoading.value = false;
    }
  }

  const passwordMatch = [
    (val: string) => val === formData.password || "As senhas não coincidem",
  ];

  async function validateCredentials() {
    await auth.ActionRecoverAccountValidateToken(tokenParams);
    showLoading.value = false;
  }

  onMounted(() => validateCredentials());
</script>

<template>
  <div v-if="showLoading" class="text-center">
    <div>
      <q-spinner-facebook color="primary" size="2.5em" />
    </div>
    <span>Verificando credenciais</span>
  </div>
  <div v-else>
    <h5 class="q-my-sm text-primary text-weight-medium">
      Recuperação de conta
    </h5>
    <div class="q-mb-lg">Informe e confirme sua nova senha</div>
    <q-form ref="form" class="q-gutter-sm" @submit.prevent="validate">
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
          :loading="isBtnLoading"
        >
          <q-icon size="1.3rem" left name="save" />
          <template #loading>
            <q-spinner-facebook />
          </template>
          Salvar dados
        </q-btn>
      </div>

      <navigate-between-pages
        text="Já recuperou a conta?"
        to="/auth/login"
        label-link="Entrar"
      />
    </q-form>
  </div>
</template>
