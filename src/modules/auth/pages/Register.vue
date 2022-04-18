<script lang="ts" setup>
  import { ref } from "vue";
  import BaseInputText from "@/shared/Inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/Inputs/BaseInputPassword.vue";

  const name = ref<string>("");
  const email = ref<string>("");
  const password = ref<string>("");
  const passwordConfirm = ref<string>("");
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Criar conta</h5>
  <div class="q-mb-lg">Cadastre-se gratuitamente</div>
  <q-form class="q-gutter-sm">
    <base-input-text
      v-model="name"
      label="Nome"
      placeholder="Ex: Lucas Fernando"
      prepend-icon="person_outline"
    />

    <base-input-text
      v-model="email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      prepend-icon="mail_outline"
    />

    <base-input-password v-model="password" label="Senha" />

    <base-input-password v-model="passwordConfirm" label="Confirmar senha" />

    <div>
      <q-btn
        class="full-width"
        rounded
        type="submit"
        padding="12px 0"
        color="primary"
        label="Cadastrar"
      />
    </div>

    <div class="q-mt-lg q-ml-md">
      <span>
        Já possui conta ?
        <router-link to="/auth/login">Entrar</router-link>
      </span>
    </div>
  </q-form>
</template>
