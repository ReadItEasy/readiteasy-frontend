<template>
  <transition name="slide-fade">
    <div id="reader-drawer" class="drawer">
      <span class="clicked-word">{{ clickedWord }}</span>
      <div class="tab-header">
        <a
          class="btn-tab"
          @click="btnTabClick"
          tab="0"
          :class="tab == 0 ? 'active' : ''"
          >WORDS</a
        >
        <a
          class="btn-tab"
          @click="btnTabClick"
          tab="1"
          :class="tab == 1 ? 'active' : ''"
          >STATS</a
        >
        <a
          class="btn-tab"
          @click="btnTabClick"
          tab="2"
          :class="tab == 2 ? 'active' : ''"
          >SIMILAR</a
        >
      </div>

      <div class="slide-container">
        <transition name="slide">
          <div v-if="tab == 0" :key="0" class="slide-item">
            <template v-if="targetLanguage == 'mandarin'">
              <WordCardMandarin
                v-for="word in processedWord"
                :key="word.id"
                :word="word"
              ></WordCardMandarin>
            </template>
            <template v-if="targetLanguage == 'english'">
              <WordCardEnglish
                v-for="(englishWord, index) in englishWords"
                :key="index"
                :englishWord="englishWord"
              ></WordCardEnglish>
            </template>
          </div>

          <div v-if="tab == 1" :key="1" class="slide-item">
            <table>
              <tr>
                <th></th>
                <th>book</th>
                <th>corpus</th>
              </tr>
              <tr>
                <th>rank</th>
                <td>{{ wordBookStatistics.rank }}</td>
                <td>{{ wordCorpusStatistics.rank }}</td>
              </tr>
              <tr>
                <th>freq</th>
                <td>
                  {{
                    (
                      (1000000 * wordBookStatistics.count) /
                      wordBookStatistics.n_tokens
                    ).toFixed(0)
                  }}
                </td>
                <td>
                  {{
                    (
                      (1000000 * wordCorpusStatistics.count) /
                      wordCorpusStatistics.n_tokens
                    ).toFixed(0)
                  }}
                </td>
              </tr>
            </table>
          </div>
          <div v-if="tab == 2" :key="2" class="slide-item">
            <ol>
              <li
                v-for="(similarWord,
                index) in wordSimilarWords.target_similar_words"
                :key="index"
              >
                {{ similarWord }}
              </li>
            </ol>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import { fetchWordFromWiktionary } from "@/services/Scrapper.js";
import WordCardMandarin from "@/components/WordCardMandarin.vue";
import WordCardEnglish from "@/components/WordCardEnglish.vue";

export default {
  components: {
    WordCardMandarin,
    WordCardEnglish
  },
  props: {
    clickedWord: {
      type: String,
      required: true
    },
    // clickedWordLemma: {
    //   type: String,
    //   required: true
    // },
    bookName: {
      type: String
    },
    targetLanguage: {
      type: String
    }
  },
  data() {
    return {
      processedWord: null,
      wordCorpusStatistics: {},
      wordBookStatistics: {},
      wordSimilarWords: {},
      tab: 0,
      englishWords: []
    };
  },
  watch: {
    clickedWord(newValue) {
      this.englishWords = [];
      // TODO : better refactoring for different languages
      if (this.targetLanguage == "mandarin") {
        apiReaditeasy
          .get("/api/words/mandarin/", {
            params: {
              simplified: newValue
            }
          })
          .then(({ data }) => {
            // console.log("clickedWord watcher ReaderDrawer", data);
            this.processedWord = this.wordJSONToObject(data);
          });
        apiReaditeasy
          .get("/api/words/mandarin/word_corpus_statistics", {
            params: {
              word: newValue
            }
          })
          .then(({ data }) => {
            // console.log("clickedWord watcher statistics", data);
            this.wordCorpusStatistics = data;
          });
        apiReaditeasy
          .get("/api/words/mandarin/word_book_statistics", {
            params: {
              word: newValue,
              bookName: this.bookName,
              targetLanguage: this.targetLanguage
            }
          })
          .then(({ data }) => {
            // console.log("clickedWord watcher statistics", data);
            this.wordBookStatistics = data;
          });
        apiReaditeasy
          .get("/api/words/mandarin/word_similar_words", {
            params: {
              word: newValue
            }
          })
          .then(({ data }) => {
            // console.log("clickedWord watcher statistics", data);
            this.wordSimilarWords = data;
          });
      } else if (this.targetLanguage == "english") {
        // TODO : Improve this nested recursive loop
        fetchWordFromWiktionary(newValue).then(englishWords => {
          const lemmasDone = [];
          for (const englishWord of englishWords) {
            this.englishWords.push(englishWord);
            console.log(englishWord["lemmas"]);
            for (const lemma of englishWord["lemmas"]) {
              if (!lemmasDone.includes(lemma)) {
                lemmasDone.push(lemma);
                fetchWordFromWiktionary(lemma).then(englishWords => {
                  for (const englishWord of englishWords) {
                    this.englishWords.push(englishWord);
                  }
                });
              }
            }
          }
        });
        // if (this.clickedWordLemma != newValue) {
        //   fetchWordFromWiktionary(this.clickedWordLemma).then(englishWords => {
        //     for (const englishWord of englishWords) {
        //       this.englishWords.push(englishWord);
        //     }
        //   });
        // }
      }
    }
  },
  methods: {
    wordJSONToObject: function(wordJSON) {
      if (wordJSON) {
        // console.log("COMP", wordJSON);
        var clickedWordProcessed = [];
        for (var word of wordJSON) {
          // console.log("check", word.definitions.split("/").filter(Boolean));
          word.definitions = word.definitions.split("/").filter(Boolean);
          clickedWordProcessed.push(word);
        }
        // console.log("finished list", clickedWordProcessed);
        return clickedWordProcessed;
      } else {
        return null;
      }
    },
    btnTabClick: function(e) {
      // console.log("e.target", e.target);
      let clikedTab = e.target.getAttribute("tab");
      if (this.tab != clikedTab) {
        this.tab = clikedTab;
      }
    }
  }
};
</script>

<style>
.drawer {
  z-index: 1;
  overflow-y: scroll;
  /* overflow: hidden; */
  position: fixed;
  top: 60px;
  right: 0px;
  height: calc(100% - 60px);
  /* height: -webkit-calc(100vh - 60px); 
    height:    -moz-calc(100vh - 60px); 
    height:      -o-calc(100vh - 60px); */
  width: 300px;
  background-color: white;
  /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13); */
  border-style: none none none solid;
  border-color: rgba(212, 212, 212);
  border-width: 1px;
  display: flex;
  flex-direction: column;
}

.drawer::-webkit-scrollbar {
  display: none;
}

.clicked-word {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
}

.tab-header {
  display: flex;
  /* height: 50px; */
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
}

.tab-header a {
  flex-basis: 100%;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  padding-top: 15px;
  padding-bottom: 15px;
  /* height: 100%; */
  /* -webkit-box-align: center;
  height: 100px;
  line-height: 100px; */
}

.tab-header a:hover {
  background-color: rgba(212, 212, 212, 0.1);
}

.btn-tab:not(.active) {
  color: grey;
}

.btn-tab.active {
  border-bottom: solid 2px;
}

.btn-tab.active:hover {
  background-color: rgba(57, 185, 130, 0.1);
}

.slide-item {
  width: 300px;
  position: absolute;
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
