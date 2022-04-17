<script lang="ts" setup>
  import { ref } from "vue";
  import BaseInputText from "@/shared/Inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/Inputs/BaseInputPassword.vue";

  const email = ref<string>("");
  const password = ref<string>("");
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Bem-vindo de volta</h5>
  <div class="q-mb-lg">Faça o seu login</div>
  <q-form class="q-gutter-sm">
    <base-input-text
      v-model="email"
      label="E-mail"
      prepend-icon="mail_outline"
    />

    <base-input-password v-model="password" label="Senha" />

    <div>
      <q-btn
        class="full-width"
        rounded
        type="submit"
        padding="12px 0"
        color="primary"
      >
        <q-icon size="1.3rem" left name="login" />
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
