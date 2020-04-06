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
    userId: null
  },
  mutations: {
    LOAD_KNOWN_WORDS(state, data) {
      state.userKnownWordsDict = data.mandarinKnownWordsDict;
      state.targetLanguage = data.targetLanguage;
    },
    TOGGLE_WORD(state, word) {
      if (word in state.userKnownWordsDict) {
        delete state.userKnownWordsDict[word];
        apiBooks.post(`/users/${state.userId}/remove_word/`, { word: word });
      } else {
        state.userKnownWordsDict[word] = true;
        apiBooks.post(`/users/${state.userId}/add_word/`, { word: word });
      }
    },
    LOGIN(state, tokens) {
      state.tokens = tokens;
      localStorage.setItem("tokens", JSON.stringify(tokens));
      apiBooks.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.access}`;
      state.userId = VueJwtDecode.decode(tokens.access).user_id;
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
    }
  },
  actions: {
    loadKnownWords({ commit }, targetLanguage) {
      if (targetLanguage && targetLanguage != this.state.targetLanguage) {
        apiBooks
          .get(`/users/${this.state.userId}/`)
          .then(response => {
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
          })
          .catch(error => {
            console.log(
              "there was an error in actions store :" + error.response
            );
          });
      }
    },
    toggleKnownWord({ commit }, word) {
      commit("TOGGLE_WORD", word);
    },
    login({ commit }, credentials) {
      return apiBooks.post("/api/token/", credentials).then(response => {
        console.log("login response", response);
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
      apiBooks
        .post("/api/token/refresh/", {
          refresh: this.$store.state.tokens.refresh
        })
        .then(response => {
          console.log("this is the new access", response.data.access);
        });
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.tokens;
    }
  },
  modules: {}
});
