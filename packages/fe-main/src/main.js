import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#root-app");

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "fe-vue-app", // app name registered
    entry: "//localhost:8081",
    container: "#sub-app",
    activeRule: "/fe-vue",
  },
]);

start();
window._IS_MICRO = true