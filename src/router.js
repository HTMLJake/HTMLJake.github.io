import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/project",
      name: "project",
      component: () => import("./views/Project.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("./views/Resume.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    }
  ]
});
