import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";

createApp(App).mount("#root-app");

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