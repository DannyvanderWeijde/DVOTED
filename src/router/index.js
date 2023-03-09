import { createRouter, createWebHashHistory } from "vue-router";
import AboutComponent from "../views/AboutComponent";
import HomeComponent from "../views/HomeComponent";

const routes = [
  {
    path: "/",
    name: "Index",
    component: HomeComponent,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/freebies",
    name: "Freebies",
    component: HomeComponent,
  },
  {
    path: "/get-inspired",
    name: "GetInspired",
    component: HomeComponent,
  },
  {
    path: "/blog",
    name: "Blog",
    component: HomeComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: HomeComponent,
  },
  {
    path: "/magazine",
    name: "Megazine",
    component: HomeComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
