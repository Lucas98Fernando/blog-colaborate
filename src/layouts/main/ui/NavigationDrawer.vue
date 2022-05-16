<script lang="ts" setup>
  import { ref } from "vue";
  import { UserMenu } from "@/modules/auth/types/auth";

  const drawer = ref<boolean>(false);
  const miniState = ref<boolean>(true);
  const menu: UserMenu[] = JSON.parse(localStorage.getItem("menu") || "[]");
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :width="250"
    :breakpoint="500"
    bordered
    class="bg-primary text-white"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          v-for="(item, index) in menu"
          :key="index"
          :to="item.to"
          clickable
          active-class="bg-white text-primary"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section> {{ item.name }} </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
