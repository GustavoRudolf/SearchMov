import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Busca",
      component: () => import("../views/PaginaPrincipal.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/PaginaLogin.vue"),
    },
    {
      path: "/SignIn",
      name: "SignIn",
      component: () => import("../views/PaginaSign.vue"),
    },
  ],
});

export default router;
