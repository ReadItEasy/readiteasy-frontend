import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userKnownWordsDict: {},
    language: "",
    user: { id: "abc123", name: "Adam Jahr" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    SAVE_KNOWN_WORDS(state, new_state) {
      state.userKnownWordsDict = new_state.userKnownWordsDict;
      state.language = new_state.language;
      console.log("mutation down (known words saved)");
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    loadKnownWords({ commit }, language) {
      if (language && language != this.state.language) {
        EventService.getUserKnownWords({ targetLanguage: language })
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
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },

  modules: {}
});
