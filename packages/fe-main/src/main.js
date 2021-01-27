import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";

createApp(App).mount("#app");

registerMicroApps([
  {
    name: "fe-vue app", // app name registered
    entry: "//localhost:8081",
    container: "#fe-vue",
    activeRule: "/fe-vue",
  },
]);
start();
