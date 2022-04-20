<script lang="ts" setup>
  import { ref } from "vue";
  import { QForm } from "quasar";
  import BaseInputText from "@/shared/inputs/BaseInputText.vue";
  import BaseInputPassword from "@/shared/inputs/BaseInputPassword.vue";

  const form = ref<QForm | null>(null);
  const email = ref<string>("");
  const password = ref<string>("");
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
  <h5 class="q-my-sm text-primary text-weight-medium">Bem-vindo de volta</h5>
  <div class="q-mb-lg">Faça o seu login</div>
  <q-form ref="form" class="q-gutter-sm" @change="validate" @input="validate">
    <base-input-text
      v-model="email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      prepend-icon="mail_outline"
      validation-type="email"
    />

    <base-input-password v-model="password" label="Senha" />

    <div>
      <q-btn
        class="full-width"
        rounded
        type="submit"
        padding="12px 0"
        color="primary"
        :disable="isBtnDisabled"
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
