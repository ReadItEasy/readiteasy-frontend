import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "nprogress/nprogress.css";
import VueMq from "vue-mq";
import VueTouch from "vue-touch";
import VueCompositionAPI from "@vue/composition-api";

import "./utils/notifications.js";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import ToggleButton from "vue-js-toggle-button";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 800,
    laptop: 1250,
    desktop: Infinity,
  },
});

Vue.use(VueTouch);

Vue.use(VueCompositionAPI);

Vue.use(ToggleButton);

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
