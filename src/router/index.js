import Vue from "vue";
import VueRouter from "vue-router";
import BookShow from "../views/BookShow.vue";
import LanguagesList from "../views/LanguagesList.vue";
import LanguageDetector from "../views/LanguageDetector.vue";
import store from "../store/index.js";
import LoginUser from "../views/LoginUser.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "languages",
    component: LanguagesList
  },
  {
    path: "/:targetLanguage/book/:bookName/:chapterNumber",
    name: "book-show",
    component: BookShow,
    props(route) {
      const props = { ...route.params };
      props.chapterNumber = +props.chapterNumber;
      return props;
    }
  },
  {
    path: "/language-detector",
    name: "language-detector",
    component: LanguageDetector,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  if (store.state.tokens) {
    store.dispatch("loadKnownWords", to.params.targetLanguage);
  }
});

router.beforeResolve((to, from, next) => {
  if (!store.state.tokens) {
    store.state.tokens = JSON.parse(localStorage.getItem("tokens"));
    if (store.state.tokens) {
      store.dispatch("setJwtHeaders");
    }
  }

  const loggedIn = !!store.state.tokens;
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: "login" }); // TOSOLVE: if from same route than the one in next, it doesnt work
  }
  next();
});

export default router;
