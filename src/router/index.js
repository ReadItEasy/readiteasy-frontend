import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ReaderTool from "../views/ReaderTool.vue";
import Books from "../views/Books.vue";
import LanguageDetector from "../views/LanguageDetector.vue";
import store from "../store/index.js";
import LoginUser from "../views/LoginUser.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Profile from "../views/Profile.vue";
import KnownWords from "../components/profile/KnownWords.vue";
import UserInfo from "../components/profile/UserInfo.vue";
import WordList from "../components/profile/WordList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // This is only useful when using frontend server like github page due to the fact ...
    //... that these servers can't serve directly a route like 'mywebsite.com/custom/route'
    beforeEnter: (to, from, next) => {
      // eslint-disable-line no-unused-vars
      const queryRoute = to.query.p;
      if (queryRoute) {
        router.push(queryRoute);
      } else {
        next();
      }
    }
  },
  {
    path: "/books",
    name: "books",
    component: Books
  },
  {
    path: "/:targetLanguage/book/:bookName/:chapterNumber",
    name: "reader-tool",
    component: ReaderTool,
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
    meta: { requiresAuth: true },
    children: [
      {
        path: "info",
        name: "info",
        component: UserInfo,
        meta: { requiresAuth: true }
      },
      {
        path: "known-words",
        name: "known-words",
        component: KnownWords,
        meta: { requiresAuth: true },
        children: [
          {
            path: ":targetLanguage",
            name: "word-list",
            component: WordList,
            meta: { requiresAuth: true }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  if (
    to.params.targetLanguage &&
    to.params.targetLanguage != store.state.book.targetLanguage
  ) {
    store.dispatch("setTargetLanguage", to.params.targetLanguage);
  }
  if (
    store.getters.loggedIn &&
    store.state.book.targetLanguage &&
    store.state.book.targetLanguage != store.state.userWords.targetLanguage
  ) {
    store.dispatch("loadKnownWords", to.params.targetLanguage);
  }
});

router.beforeResolve((to, from, next) => {
  store.dispatch("checkLocalStorage");

  const loggedIn = store.getters.loggedIn;
  if (loggedIn) {
    store.dispatch("refreshTokens");
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: "login" }); // TOSOLVE: if from same route than the one in next, it doesnt work
  }
  next();
});

export default router;
