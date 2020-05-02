import Vue from "vue";
import Vuex from "vuex";
import { apiBooks } from "@/services/ApiService.js";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userKnownWordsDict: {},
    targetLanguage: "",
    tokens: null,
    userId: null,
    firstName: null,
    isNavOpen: false
  },
  mutations: {
    LOAD_KNOWN_WORDS(state, data) {
      state.userKnownWordsDict = data.mandarinKnownWordsDict;
      state.targetLanguage = data.targetLanguage;
    },
    TOGGLE_WORD(state, word) {
      if (state.userKnownWordsDict[word]) {
        state.userKnownWordsDict[word] = false;
        apiBooks.post(`api/users/${state.userId}/remove_word/`, { word: word });
      } else {
        Vue.set(state.userKnownWordsDict, word, true);
        // this.$set(state.userKnownWordsDict, word, true)
        apiBooks.post(`api/users/${state.userId}/add_word/`, { word: word });
      }
    },
    LOGIN(state, tokens) {
      state.tokens = tokens;
      localStorage.setItem("tokens", JSON.stringify(tokens));
      apiBooks.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.access}`;
      state.userId = VueJwtDecode.decode(tokens.access).user_id;
      state.firstName = VueJwtDecode.decode(tokens.access).first_name;
    },
    LOGOUT() {
      localStorage.removeItem("tokens");
      location.reload();
    },
    SET_JWT_HEADERS(state) {
      apiBooks.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.tokens.access}`;
      state.userId = VueJwtDecode.decode(state.tokens.access).user_id;
      state.firstName = VueJwtDecode.decode(state.tokens.access).first_name;
    },
    TOGGLE_NAV(state) {
      state.isNavOpen = !state.isNavOpen;
    }
  },
  actions: {
    loadKnownWords({ commit }, targetLanguage) {
      if (targetLanguage && targetLanguage != this.state.targetLanguage) {
        apiBooks.get(`api/users/${this.state.userId}/`).then(response => {
          var mandarinKnownWordsField =
            response.data.profile.mandarin_known_words;
          var mandarinKnownWordsList = mandarinKnownWordsField.split("\n");
          var mandarinKnownWordsDict = {};
          for (const word of mandarinKnownWordsList) {
            mandarinKnownWordsDict[word] = true;
          }
          var data = {};
          data["mandarinKnownWordsDict"] = mandarinKnownWordsDict;
          data["targetLanguage"] = targetLanguage;
          commit("LOAD_KNOWN_WORDS", data);
          // })
          // .catch(error => {
          //   console.log(
          //     "there was an error in actions store :" + error.response
          //   );
        });
      }
    },
    toggleKnownWord({ commit }, word) {
      commit("TOGGLE_WORD", word);
    },
    login({ commit }, credentials) {
      return apiBooks.post("api/users/token/", credentials).then(response => {
        // console.log("login response", response);
        commit("LOGIN", response.data);
      });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    setJwtHeaders({ commit }) {
      commit("SET_JWT_HEADERS");
    },
    refreshTokens({ commit }) {
      commit("TODO : Create a commit");
      apiBooks.post("/api/users/token/refresh/", {
        refresh: this.$store.state.tokens.refresh
      });
      // .then(response => {
      //   console.log("this is the new access", response.data.access);
      // });
    },
    toggleNav({ commit }) {
      commit("TOGGLE_NAV");
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.tokens;
    }
  },
  modules: {}
});
