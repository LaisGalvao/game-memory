import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Init from "@/components/Init";
import Register from "@/components/Forms/Register";
import PassRecover from "@/components/Forms/PassRecover";
import NewPass from "@/components/Forms/NewPass";
import Game from "@/components/Game";

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: "/"
  },

  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/init",
    name: "init",
    component: Init,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/passrecover",
    name: "password-recover",
    component: PassRecover
  },
  {
    path: "/newpass",
    name: "newpass",
    component: NewPass
  },
  {
    path: "/game",
    name: "game",
    component: Game
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/*
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next("/");
  else if (requiresAuth && !currentUser) next("init");
  else next();
})
*/
export default router;
