<script lang="ts" setup>
  import { useQuasar } from "quasar";
  import { ref } from "vue";

  const $q = useQuasar();

  const name = ref<string>("");
  const email = ref<string>("");
  const password = ref<string>("");

  const onSubmit = () => {
    if (!name.value) {
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
  <h5 class="q-my-sm text-primary text-weight-medium">Criar conta</h5>
  <div class="q-mb-lg">Cadastre-se gratuitamente</div>
  <q-form class="q-gutter-sm" @submit="onSubmit">
    <q-input
      v-model="name"
      label="Nome"
      placeholder="Ex: Lucas Fernando"
      lazy-rules
      rounded
      outlined
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    >
      <template #prepend>
        <q-icon name="person_outline" />
      </template>
    </q-input>

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
