import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userKnownWordsDict: {},
    language: ""
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
      console.log(state.userKnownWordsDict[word])
      if (word in state.userKnownWordsDict) {
        delete state.userKnownWordsDict[word]
      } else {
        state.userKnownWordsDict[word] = true
      }
      console.log(state.userKnownWordsDict[word])
    }
  },
  actions: {
    loadKnownWords({ commit }, language) {
      if (language && language != this.state.language) {
        ApiService.getUserKnownWords({ targetLanguage: language })
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
    }
  },

  modules: {}
});
