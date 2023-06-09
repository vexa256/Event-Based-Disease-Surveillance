window.SERVER_URL = "http://172.21.159.237:8000/api/";
window.ASSET_URL = "http://172.21.159.237:8000/";
import "./globals";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./scripts/ui-loader";
import router from "./router";
import store from "./store";  // import Vuex store
import "./network";

const app = createApp(App);
app.use(store);  // use Vuex store
app.use(router);
app.mount("#app");

