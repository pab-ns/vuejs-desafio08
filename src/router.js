import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
// import SobreMi from "./components/SobreMi";
// import Contacto from "./components/Contacto";
// import Post from "./components/Post";
import Articulo from "./components/Articulo";
import NotFound from "./components/NotFound";

import Admin from "./components/Admin.vue";
import Home from "./components/Home.vue";
// import Portada from "./components/Portada.vue";

// const LlInicio = () => import("./components/Inicio.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    // Redirect Home
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: "/",
    },
    // Redirect Portada
    {
      path: "/portada",
      name: "portada",
      component: () => import("./components/Portada.vue"),
      redirect: "/",
    },
    // Redirect Inicio
    {
      path: "/inicio",
      name: "inicio",
      component: Inicio,
      redirect: "/",
    },
    // Sobre Mi
    {
      path: "/sobremi",
      name: "sobremi",
      component: () => import("./components/SobreMi.vue"),
      alias: ["/acerca", "/sobre-mi"],
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("./components/Contacto.vue"),
      alias: "/contactame",
    },
    {
      path: "/post",
      name: "post",
      component: () => import("./components/Post.vue"),
      children: [
        {
          path: ":articulo",
          component: Articulo,
        },
      ],
    },
    // ADMIN
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      redirect: { name: "NotFound" },
      children: [
        {
          path: "simple",
          component: () => import("./components/AdminSimple.vue"),
        },
        {
          path: "avanzado",
          component: () => import("./components/AdminAvanzado.vue"),
        },
      ],
    },
    {
      path: "*",
      component: NotFound,
      name: "NotFound",
    },
  ],
});
