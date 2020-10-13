import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MoviesDetails from "../components/MoviesDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:movies",
    name: "moviesdetails",
    component: MoviesDetails,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior () {
    // return desired position
  
    return { x: 0, y: 0 }


  },
  routes,
});

export default router;
