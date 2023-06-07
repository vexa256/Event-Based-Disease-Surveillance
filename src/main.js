window.SERVER_URL = "http://172.30.216.228:8000/api/";
import "./globals";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./scripts/ui-loader";
import router from "./router";
import "./network";
createApp(App).use(router).mount("#app");
