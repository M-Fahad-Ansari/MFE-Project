import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("./components/HomeContent.vue") },
  {
    path: "/product",
    children: [
      {
        path: "",
        redirect: { name: "detail", params: { id: 1 } },
      },
      {
        path: ":id",
        name: "detail",
        component: () => import("./components/HomeContent.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
