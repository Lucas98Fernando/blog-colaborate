<script lang="ts" setup>
  import { ref } from "vue";

  const drawer = ref<boolean>(false);
  const miniState = ref<boolean>(true);
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :width="250"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item clickable to="/home">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section> Início </q-item-section>
        </q-item>

        <q-item clickable to="/about">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> Star </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section> Send </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Drafts </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
