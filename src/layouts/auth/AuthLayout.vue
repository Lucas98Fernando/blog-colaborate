<template>
  <div class="auth-container">
    <div class="content-left">
      <img
        src="https://ouch-cdn2.icons8.com/JfWZHaAyljpMV_pz0FKOR1ZifPsJPBbbGdMLpJh2zCE/rs:fit:1605:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzkv/N2ZjMWUzOTYtNTBl/NC00MGZkLTllMDAt/ZGIxYWNhNjI5MmNj/LnBuZw.png"
        alt="Logo"
      />
    </div>
    <div class="content-right">
      <q-card class="card-auth q-pa-md">
        <img class="logo" src="/images/logo.png" alt="Logo" />
        <router-view :key="$route.fullPath" />
      </q-card>
    </div>
  </div>
</template>
