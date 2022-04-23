<script lang="ts" setup>
  import { computed, reactive, ref } from "vue";
  import { IDialog } from "@/shared/dialogs/interfaces/dialog";
  import { IDialogOptions } from "@/shared/dialogs/types/dto";
  import eventBus from "@/helpers/eventBus";

  const dialog = ref<boolean>(false);
  const data = reactive<IDialogOptions>({
    title: "",
    type: "",
    message: "",
  });

  eventBus.addEventListener("show-base-dialog", (payload: IDialog) => {
    dialog.value = true;
    Object.keys(data).forEach((key) => {
      data[key as keyof IDialogOptions] =
        payload.data?.[key as keyof IDialogOptions];
    });
  });
  eventBus.addEventListener("hide-base-dialog", () => (dialog.value = false));

  const setIcon = computed(() => {
    if (data.type === "red") return "error";
    if (data.type === "green") return "check_circle";
    else return "";
  });
</script>

<template>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ data.title }}</div>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-card-section>

      <q-card-section class="row items-center">
        <q-icon :name="setIcon" :color="data.type" size="2.5em" />
        <span class="q-ml-sm">{{ data.message }}</span>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
