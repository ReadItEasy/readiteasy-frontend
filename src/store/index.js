import Vue from "vue";
import Vuex from "vuex";
import { apiReaditeasy } from "@/services/ApiService.js";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(Vuex);

const bookModule = {
  state: {
    targetLanguage: "",
  },
  mutations: {
    SET_TARGET_LANGUAGE(state, targetLanguage) {
      state.targetLanguage = targetLanguage;
    },
  },
  actions: {
    setTargetLanguage({ commit }, targetLanguage) {
      commit("SET_TARGET_LANGUAGE", targetLanguage);
    },
  },
};

const settingsModule = {
  state: {
    fontSize: 28,
    showSettings: false,
    showUnknown: true,
  },
  mutations: {
    INCREMENT_FONT_SIZE(state, increment) {
      state.fontSize = state.fontSize + increment;
      localStorage.setItem("settings", JSON.stringify(state));
    },
    TOGGLE_SHOW_SETTINGS(state) {
      state.showSettings = !state.showSettings;
    },
    TOGGLE_SHOW_UNKNOWN(state) {
      state.showUnknown = !state.showUnknown;
      localStorage.setItem("settings", JSON.stringify(state));
    },
    LOAD_LOCAL_STORAGE_SETTINGS(state, localSettings) {
      state.fontSize = localSettings.fontSize;
      state.showUnknown = localSettings.showUnknown;
    },
  },
  actions: {
    incrementFontSize({ commit }, increment) {
      commit("INCREMENT_FONT_SIZE", increment);
    },
    toggleShowSettings({ commit }) {
      commit("TOGGLE_SHOW_SETTINGS");
    },
    toggleShowUnknown({ commit }) {
      commit("TOGGLE_SHOW_UNKNOWN");
    },
    loadLocalStorageSettings({ commit }) {
      const localSettings = JSON.parse(localStorage.getItem("settings"));
      if (localSettings) {
        commit("LOAD_LOCAL_STORAGE_SETTINGS", localSettings);
        // dispatch("notification/addNotification", {
        //   message: "Successfully loaded local settings",
        //   type: "success",
        // });
      }
    },
  },
};

const userModule = {
  state: {
    tokens: null,
    userId: null,
    firstName: null,
  },
  mutations: {
    LOGIN(state, tokens) {
      state.tokens = tokens;
      localStorage.setItem("tokens", JSON.stringify(tokens));
      apiReaditeasy.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.access}`;
      state.userId = VueJwtDecode.decode(tokens.access).user_id;
      state.firstName = VueJwtDecode.decode(tokens.access).first_name;
    },
    LOGOUT() {
      localStorage.removeItem("tokens");
      location.reload();
    },

    SET_TOKENS(state, tokens) {
      state.tokens = tokens;
      localStorage.setItem("tokens", JSON.stringify(tokens));
    },
    SET_JWT_HEADERS(state) {
      apiReaditeasy.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.tokens.access}`;
    },
    SET_USER_INFO(state) {
      state.userId = VueJwtDecode.decode(state.tokens.access).user_id;
      state.firstName = VueJwtDecode.decode(state.tokens.access).first_name;
    },
  },
  actions: {
    credentialsLogin({ commit, dispatch }, credentials) {
      return apiReaditeasy
        .post("api/users/token/", credentials)
        .then((response) => {
          const tokens = response.data;
          commit("SET_TOKENS", tokens);
          commit("SET_JWT_HEADERS");
          commit("SET_USER_INFO");
          dispatch("notification/addNotification", {
            message: "Successfully logged in",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch("notification/addNotification", {
            message: "Error : Couldn't log in",
            type: "danger",
          });
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    setJwtHeaders({ commit }) {
      commit("SET_JWT_HEADERS");
    },
    refreshTokens({ commit, state }) {
      const accessExpiredDate = VueJwtDecode.decode(state.tokens.access).exp;
      const currentDate = Math.round(Date.now() / 1000);

      if (currentDate > accessExpiredDate) {
        apiReaditeasy
          .post("/api/users/token/refresh/", {
            refresh: state.tokens.refresh,
          })
          .then((response) => {
            const tokens = response.data;
            commit("SET_TOKENS", tokens);
            commit("SET_JWT_HEADERS");
            commit("SET_USER_INFO");
          });
      }
    },
    checkLocalStorage({ commit, state }) {
      if (!state.tokens) {
        const localTokens = JSON.parse(localStorage.getItem("tokens"));
        if (localTokens) {
          commit("SET_TOKENS", localTokens);
          commit("SET_JWT_HEADERS");
          commit("SET_USER_INFO");
        }
      }
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.tokens;
    },
  },
};

const userWordsModule = {
  state: {
    knownDict: {},
    studyDict: {},
    targetLanguage: null,
  },
  mutations: {
    LOAD_KNOWN_WORDS(state, data) {
      state.knownDict = data.knownDict;
      state.studyDict = data.studyDict;
      state.targetLanguage = data.targetLanguage;
    },
    TOGGLE_WORD(state, data) {
      const word = data.word.toLowerCase();
      const targetLanguage = data.targetLanguage;
      const list = data.list;

      if (state[`${data.list}Dict`][word]) {
        state[`${data.list}Dict`][word] = false;
        apiReaditeasy.post(`api/users/${data.userId}/remove_word/`, {
          word: word,
          targetLanguage: targetLanguage,
          list: list,
        });
      } else {
        Vue.set(state[`${data.list}Dict`], word, true);
        // this.$set(state.knownDict, word, true)
        apiReaditeasy.post(`api/users/${data.userId}/add_word/`, {
          word: word,
          targetLanguage: targetLanguage,
          list: list,
        });
      }
    },
  },
  actions: {
    loadKnownWords({ commit, rootState }, targetLanguage) {
      apiReaditeasy
        .get(`api/users/${rootState.user.userId}/`)
        .then((response) => {
          var knownField =
            response.data.profile[`${targetLanguage}_known_words`];
          var studyField =
            response.data.profile[`${targetLanguage}_study_words`];
          var knownList = knownField.split("\n");
          var studyList = studyField.split("\n");
          var knownDict = {};
          for (const word of knownList) {
            knownDict[word] = true;
          }
          var studyDict = {};
          for (const word of studyList) {
            studyDict[word] = true;
          }
          var data = {};
          data["knownDict"] = knownDict;
          data["studyDict"] = studyDict;
          data["targetLanguage"] = targetLanguage;
          commit("LOAD_KNOWN_WORDS", data);
          // })
          // .catch(error => {
          //     "there was an error in actions store :" + error.response
          //   );
        });
      // }
    },
    toggleKnownWord({ commit, rootState }, data) {
      data.userId = rootState.user.userId;
      commit("TOGGLE_WORD", data);
    },
  },
};

const notificationModule = {
  namespaced: true,
  state: { notifications: [] },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter((notification) => {
        return notification.id != notificationToRemove.id;
      });
    },
  },
  actions: {
    addNotification({ commit }, notification) {
      notification.id = new Date().getTime();
      commit("PUSH_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
  getters: {
    notifications: (state) => state.notifications,
  },
};

export default new Vuex.Store({
  modules: {
    book: bookModule,
    settings: settingsModule,
    user: userModule,
    userWords: userWordsModule,
    notification: notificationModule,
  },
  state: {
    isNavOpen: false,
  },
  mutations: {
    TOGGLE_NAV(state) {
      state.isNavOpen = !state.isNavOpen;
    },
  },
  actions: {
    toggleNav({ commit }) {
      commit("TOGGLE_NAV");
    },
  },
});
