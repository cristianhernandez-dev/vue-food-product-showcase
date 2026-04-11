import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";

// i18n
import { i18n } from "./i18n";

const vuetify = createVuetify();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(i18n)
  .mount("#app");