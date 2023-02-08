import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/freebies",
    name: "Freebies",
    component: Home
  },
  {
    path: "/get-inspired",
    name: "GetInspired",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Home
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
