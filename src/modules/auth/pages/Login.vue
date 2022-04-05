<script lang="ts" setup>
  import { useQuasar } from "quasar";
  import { ref } from "vue";

  const $q = useQuasar();

  const name = ref(null);
  const age = ref(null);

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

  const onReset = () => {
    name.value = null;
    age.value = null;
  };
</script>

<template>
  <h6>Faça o seu login</h6>
  <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
    <q-input
      v-model="name"
      label="Your name *"
      hint="Name and surname"
      lazy-rules
      rounded
      outlined
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      v-model="age"
      filled
      type="number"
      label="Your age *"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Please type a real age',
      ]"
    />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>
