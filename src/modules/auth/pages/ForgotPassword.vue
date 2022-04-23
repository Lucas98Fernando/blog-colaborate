<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { QForm } from "quasar";
  import { authStore } from "@/modules/auth/store/auth";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import { IForgotPasswordRequest } from "../types/auth";

  const form = ref<QForm | null>(null);
  const isBtnLoading = ref<boolean>(false);
  const auth = authStore();
  const formData = reactive<IForgotPasswordRequest>({
    email: "",
  });

  function validate() {
    return form.value?.validate().then((success) => {
      if (success) handlerForgotPassword();
      else alert("Algo deu errado!");
    });
  }

  async function handlerForgotPassword() {
    try {
      isBtnLoading.value = true;
      await auth.ActionForgotPassword(formData);
    } finally {
      isBtnLoading.value = false;
    }
  }
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Recuperação de conta</h5>
  <div class="q-mb-lg">Informe o seu e-mail para recuperação</div>
  <q-form ref="form" class="q-gutter-sm" @submit.prevent="validate">
    <base-input-text
      v-model="formData.email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      prepend-icon="mail_outline"
      validation-type="email"
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
        <template #loading>
          <q-spinner-facebook />
        </template>
        Enviar e-mail
        <q-icon size="1.3rem" right name="send" />
      </q-btn>
    </div>

    <div class="q-mt-lg q-ml-md">
      <span>
        Já recuperou a conta ?
        <router-link to="/auth/login">Fazer login</router-link>
      </span>
    </div>
  </q-form>
</template>
