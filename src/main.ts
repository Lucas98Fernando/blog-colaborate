import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import "./assets/css/app.scss";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: {},
  })
  .mount("#app");
