window.SERVER_URL = "http://172.23.100.215:8000/api/";
import "./globals";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./scripts/ui-loader";
import router from "./router";

import vuetify from "./vuetify"; // Import Vuetify from the vuetify.js file you just created

createApp(App).use(router).use(vuetify).mount("#app");
