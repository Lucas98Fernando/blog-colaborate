<script lang="ts" setup>
  import { useQuasar } from "quasar";
  import { ref } from "vue";

  const $q = useQuasar();

  const email = ref<string>("");
  const password = ref<string>("");

  const onSubmit = () => {
    if (!email.value) {
      $q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first",
      });
    } else {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    }
  };
</script>

<template>
  <h5 class="q-my-sm text-primary text-weight-medium">Bem-vindo de volta</h5>
  <div class="q-mb-lg">Faça o seu login</div>
  <q-form class="q-gutter-sm" @submit="onSubmit">
    <q-input
      v-model="email"
      label="E-mail"
      placeholder="Ex: lucas@gmail.com"
      lazy-rules
      rounded
      outlined
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    >
      <template #prepend>
        <q-icon name="mail_outline" />
      </template>
    </q-input>

    <q-input
      v-model="password"
      label="Senha"
      lazy-rules
      outlined
      rounded
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Please type a real age',
      ]"
    >
      <template #prepend>
        <q-icon name="lock_outline" />
      </template>
    </q-input>

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
