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
    return {
      error: "/images/illustrations/boy-working-on-computer.png",
      success: "/images/illustrations/woman-works-on-laptop.png",
    }[String(data.type)];
  });

  const setColor = computed(() => {
    return { error: "red", success: "green" }[String(data.type)];
  });

  const setButtonText = computed(() => {
    return { error: "Tente novamente", success: "Continuar" }[
      String(data.type)
    ];
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
