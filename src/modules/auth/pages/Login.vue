<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { QForm } from "quasar";
  import { authStore } from "@/modules/auth/store/auth";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";

  const form = ref<QForm | null>(null);
  const isBtnLoading = ref<boolean>(false);
  const auth = authStore();
  const formData = reactive({
    email: "",
    password: "",
  });

  function validate() {
    return form.value?.validate().then((success) => {
      if (success) handlerLogin();
      else alert("Algo deu errado!");
    });
  }

  async function handlerLogin() {
    try {
      isBtnLoading.value = true;
      await auth.ActionLogin(formData);
    } finally {
      isBtnLoading.value = false;
    }
  }
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Bem-vindo de volta</h5>
  <div class="q-mb-lg">Faça o seu login</div>
  <q-form ref="form" class="q-gutter-sm" @submit.prevent="validate">
    <base-input-text
      v-model="formData.email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      prepend-icon="mail_outline"
      validation-type="email"
    />

    <base-input-password v-model="formData.password" label="Senha" />

    <div>
      <q-btn
        class="full-width"
        rounded
        type="submit"
        padding="12px 0"
        color="primary"
        :loading="isBtnLoading"
      >
        <q-icon size="1.3rem" left name="login" />
        <template #loading>
          <q-spinner-facebook />
        </template>
        Entrar
      </q-btn>
    </div>

    <div class="q-mt-lg q-ml-md">
      <span>
        Ainda não possui conta ?
        <router-link to="/auth/register">Cadastrar-se</router-link>
      </span>
    </div>
  </q-form>
</template>
