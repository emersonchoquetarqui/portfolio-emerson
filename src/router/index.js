import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/MainView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/components/modules/home/Home.vue"),
      },
      {
        path: "/sobre",
        name: "Sobre",
        component: () => import("@/components/modules/portfolio/Portfolio.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
