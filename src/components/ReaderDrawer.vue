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
import { apiWiktionary } from "@/services/Scrapper.js";
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
      } else {
        this.englishWords = [];
        var nextUntil = function(elem, selector) {
          // Setup siblings array
          var siblingsHtml = document.createElement("div");
          var siblings = [elem];

          // Get the next sibling element
          elem = elem.nextElementSibling;

          // As long as a sibling exists
          while (elem) {
            // If we've reached our match, bail
            if (elem.matches(selector)) break;

            // If filtering by a selector, check if the sibling matches
            // if (filter && !elem.matches(filter)) {
            //   elem = elem.nextElementSibling;
            //   continue;
            // }

            // Otherwise, push it to the siblings array
            siblings.push(elem);

            // Get the next sibling element
            elem = elem.nextElementSibling;
          }

          for (const sibling of siblings) {
            siblingsHtml.innerHTML += sibling.outerHTML;
          }

          return siblingsHtml;
        };
        console.log("TODO : import scrapper.js");
        // scrapeEnglishWiktionary("www.google.com")
        apiWiktionary
          .get("api.php", {
            params: {
              action: "parse",
              format: "json",
              page: newValue,
              origin: "*"
            }
          })
          .then(({ data }) => {
            // console.log(data.parse.text['*']);
            var parsedHtml = document.createElement("html");
            parsedHtml.innerHTML = data.parse.text["*"];
            // console.log(parsedHtml.getElementsByClassName("tocnumber"))
            console.log(parsedHtml.children);
            var h2_section_starts = parsedHtml.querySelectorAll(
              "div.mw-parser-output > h2"
            );
            for (const h2_section_start of h2_section_starts) {
              if (
                h2_section_start.querySelectorAll("#Anglais.mw-headline").length
              ) {
                var h2_section = nextUntil(h2_section_start, "h2");
              }
            }
            var h3_section_starts = h2_section.querySelectorAll("h3");
            for (const h3_section_start of h3_section_starts) {
              const POS = h3_section_start
                .querySelector(".mw-headline")
                .getAttribute("id");
              console.log(POS);
              // if (h3_section_start.querySelector(".mw-headline").getAttribute("id") != '' )
              var h3_section = nextUntil(h3_section_start, "h3");

              // TODO : make a positive field list to include (ex : ["forme_de_verbe", "adjectif" ,..])
              if (
                !POS.includes("mologi") && //ethymologie
                !POS.includes("onciatio") && //prononciation
                !POS.includes("oir_auss") && //voir_aussi
                !POS.includes("éférenc") && //référence
                !POS.includes("agra") // anagrame
              ) {
                // console.log()
                var englishWord = {};
                var definitions = [];
                h3_section.querySelectorAll("ol > li").forEach(e => {
                  const ulChild = e.querySelector("ul");
                  if (ulChild) {
                    e.removeChild(ulChild);
                  }
                  console.log(e);
                  definitions.push(e.innerText);
                });
                englishWord["definitions"] = definitions;
                const pronunciation = h3_section.querySelector(".API");
                if (pronunciation) {
                  englishWord["pronunciation"] = pronunciation.innerText;
                }
                englishWord["POS"] = POS;
                this.englishWords.push(englishWord);
              }
            }
            // console.log(section)
            // console.log(nextUntil(parsedHtml.querySelector("div.mw-parser-output > h2"), "h2"))
          });
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
