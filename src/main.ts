import { createApp } from "vue";
import "@/styles/index.css";
import "tailwindcss/tailwind.css";
import App from "./App.vue";
import router from "./router";
import pinia from "@/stores";
import { createPersistedState } from "pinia-plugin-persistedstate";
pinia.use(createPersistedState());
createApp(App).use(router).use(pinia).mount("#app");
