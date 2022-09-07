import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { Route } from "@/types";
import ROUTES from "@/router/routes";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes: RouteRecordRaw[] = Object.keys(ROUTES).map(
  (routeKey: string): RouteRecordRaw => {
    const { name, path, componentName }: Route = ROUTES[routeKey];

    return {
      path,
      name,
      component: () => import(`../views/${componentName}.vue`),
    };
  }
);

routes.push({ path: "/:pathMatch(.*)*", component: PageNotFoundView });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
