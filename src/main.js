window.SERVER_URL = "https://ecsa0.sytes.net/api/";
window.ASSET_URL = "https://ecsa0.sytes.net/";
import "./globals";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./scripts/ui-loader";
import router from "./router";
import store from "./store"; // import Vuex store
import "./network";
import "./globalEbsOps";

const app = createApp(App);
app.use(store); // use Vuex store
app.use(router);
app.mount("#app");
