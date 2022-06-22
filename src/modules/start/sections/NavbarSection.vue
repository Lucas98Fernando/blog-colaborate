<template>
  <nav class="nav">
    <router-link class="logo-wrapper" to="/start">
      <img class="logo" src="/logo.png" alt="Logo" />
      <span class="title">Blog Colaborate</span>
    </router-link>
    <div>
      <q-btn rounded color="primary" to="/auth/login">Entrar</q-btn>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    display: flex;
    // position: sticky;
    // top: 0;
    // background-color: #fff;
    // z-index: 10;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0 1.5rem 0;
    .logo-wrapper {
      display: flex;
      align-items: center;
      .logo {
        width: 10%;
        max-width: 100%;
        height: auto;
      }
      .title {
        color: var(--q-primary);
        font-weight: 600;
        font-size: 1.1rem;
        padding: 0 0 0 0.5rem;
      }
    }
  }
</style>
