import Vue from "vue";
import VueRouter from "vue-router";
// import EventCreate from "../views/EventCreate.vue";
// import EventList from "../views/EventList.vue";
import BookShow from "../views/BookShow.vue";
import LanguagesList from "../views/LanguagesList.vue";
import LanguageDetector from "../views/LanguageDetector.vue";
import draft from "../views/draft.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "languages",
    component: LanguagesList
  },
  {
    path: "/book/:textLang/:bookName/:chapter",
    name: "book-show",
    component: BookShow,
    props(route) {
      const props = { ...route.params };
      props.chapter = +props.chapter;
      return props;
    }
  },
  {
    path: "/language-detector",
    name: "language-detector",
    component: LanguageDetector
  },
  // {
  //   path: "/languages",
  //   name: "languages",
  //   component: Languages
  // },
  {
    path: "/draft",
    name: "draft",
    component: draft
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
