import { createApp } from "vue";
import "./scss/style.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");
