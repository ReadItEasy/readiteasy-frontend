import Vue from "vue";
import VueRouter from "vue-router";
import BookShow from "../views/BookShow.vue";
import LanguagesList from "../views/LanguagesList.vue";
import LanguageDetector from "../views/LanguageDetector.vue";
import store from "../store/index.js";

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
    component: LanguageDetector
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  store.dispatch("loadKnownWords", to.params.targetLanguage);
});

export default router;
