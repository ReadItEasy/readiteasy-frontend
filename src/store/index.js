import Vue from "vue";
import Vuex from "vuex";
// import ApiService from "@/services/ApiService.js";
import { apiBooks } from "@/services/ApiService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userKnownWordsDict: {},
    language: "",
    user: null
  },
  mutations: {
    SAVE_KNOWN_WORDS(state, new_state) {
      state.userKnownWordsDict = new_state.userKnownWordsDict;
      state.language = new_state.language;
    },
    TOOGLE_WORD(state, word) {
      // state.userKnownWordsDict[word] = state.userKnownWordsDict[word] ? true : false
      // console.log("before mutation", state.userKnownWordsDict[word])
      // state.userKnownWordsDict[word] = !state.userKnownWordsDict[word]
      // console.log("after mutation", state.userKnownWordsDict[word])
      console.log(state.userKnownWordsDict[word]);
      if (word in state.userKnownWordsDict) {
        delete state.userKnownWordsDict[word];
      } else {
        state.userKnownWordsDict[word] = true;
      }
      console.log(state.userKnownWordsDict[word]);
    },
    LOGIN(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      apiBooks.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.access}`;
    },
    LOGOUT() {
      localStorage.removeItem("user");
      location.reload();
    },
    SET_JWT_HEADERS(state) {
      apiBooks.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.user.access}`;
    }
    // REGISTER(state, data) {
    //   console.log(data);
    // }
  },
  actions: {
    loadKnownWords({ commit }, language) {
      if (language && language != this.state.language) {
        // ApiService.getUserKnownWords({ targetLanguage: language })
        apiBooks
          .get("/api-books/user-known-words", {
            params: { targetLanguage: language }
          })
          .then(response => {
            var new_state = {};
            new_state["userKnownWordsDict"] =
              response.data.user_known_words_dict;
            new_state["language"] = language;
            commit("SAVE_KNOWN_WORDS", new_state);
          })
          .catch(error => {
            console.log(
              "there was an error in actions store :" + error.response
            );
          });
      }
    },
    toogleKnownWord({ commit }, word) {
      commit("TOOGLE_WORD", word);
    },
    // register({ commit }, credentials) {
    //   return apiBooks
    //     .post("/users/", {
    //       email: credentials.email,
    //       first_name: credentials.firstName,
    //       last_name: credentials.lastName,
    //       password: credentials.password,
    //       profile: {
    //         country: credentials.country
    //       }
    //     })
    //     .then(response => {
    //       console.log(response);
    //       this.login(credentials)
    //       // commit("LOGIN", credentials);
    //     });
      // .then(({ data }) => {
      //   commit("REGISTER", data);
      // commit("SET_USER_DATA", data);

      //   axios
      //   .post('http://127.0.0.1:8000/api/users/', {
      //     email : "test@gmail.com",
      //     username : 'test'
      //   })
      //   .then(response => (this.info = response.data))

      // });
    // },
    login({ commit }, credentials) {
      return apiBooks.post("/api/token/", credentials).then(({ data }) => {
        commit("LOGIN", data);
      });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    setJwtHeaders({ commit }) {
      commit("SET_JWT_HEADERS");
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  },
  modules: {}
});
