<template>
  <q-card class="q-mt-sm card-rounded">
    <q-card-section class="items-center" horizontal>
      <q-card-section class="col-8">
        <span class="title-card-home">
          Bem-vindo de volta ao Blog Colaborate!
        </span>
        <p>O seu portal de notícias para entusiatas de tecnlogia.</p>
        <q-btn class="q-mr-sm" color="primary" rounded to="/start">
          Ir para o blog
          <q-icon size="1.3rem" right name="newspaper" />
        </q-btn>
        <q-btn color="primary" rounded outline>
          Saiba mais
          <q-icon size="1.3rem" right name="call_made" />
        </q-btn>
      </q-card-section>

      <q-img
        class="col-4"
        src="/images/illustrations/likes.png"
        width="350px"
      />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
  .title-card-home {
    font-size: 1.8rem;
    color: var(--q-primary);
    font-weight: 600;
  }
</style>
