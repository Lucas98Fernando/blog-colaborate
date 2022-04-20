<script lang="ts" setup>
  import { ref } from "vue";
  import { QForm } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";

  const form = ref<QForm | null>(null);
  const name = ref<string>("");
  const email = ref<string>("");
  const password = ref<string>("");
  const passwordConfirm = ref<string>("");
  const isBtnDisabled = ref<boolean>(true);

  function validate() {
    form.value?.validate().then((success) => {
      if (success) {
        isBtnDisabled.value = false;
      } else {
        isBtnDisabled.value = true;
      }
    });
  }
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Criar conta</h5>
  <div class="q-mb-lg">Cadastre-se gratuitamente</div>
  <q-form ref="form" class="q-gutter-sm" @change="validate" @input="validate">
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
      validation-type="email"
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
        :disable="isBtnDisabled"
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
