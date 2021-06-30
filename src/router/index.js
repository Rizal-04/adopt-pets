import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Cats from "../views/cats";
import Dogs from "../views/dogs";
import Pet from "../views/pet";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats,
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs,
  },
  {
    path: "/pets/:species/:id",
    name: "Pet",
    component: Pet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
