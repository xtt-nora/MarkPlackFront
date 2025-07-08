import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { staticRouter } from "@/router/modules/staticRouter";
const mode = import.meta.env.VITE_ROUTER_MODE;
const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory()
};
const router = createRouter({
  history: routerMode[mode](),
routes: [...staticRouter],
});
export default router;