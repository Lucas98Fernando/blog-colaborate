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

  const setImage = computed(() => {
    if (data.type === "error")
      return "/images/illustrations/boy-writing-to-notebook.png";
    if (data.type === "success")
      return "/images/illustrations/woman-works-on-laptop.png";
    else return "";
  });

  const setColor = computed(() => {
    if (data.type === "error") return "red";
    if (data.type === "success") return "green";
    else return "";
  });

  const setButtonText = computed(() => {
    if (data.type === "error") return "Tente novamente";
    if (data.type === "success") return "Continuar";
    else return "";
  });
</script>

<template>
  <q-dialog v-model="dialog">
    <q-card class="card-base-dialog">
      <q-card-section class="text-center">
        <img :src="setImage" alt="Ilustração de feedback" width="200" />
        <div :class="`text-${setColor}`" class="text-h6 text-weight-bold">
          {{ data.title }}
        </div>
        <p class="text-blue-grey-9">{{ data.message }}</p>
        <q-btn v-close-popup :color="setColor" rounded :label="setButtonText" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
