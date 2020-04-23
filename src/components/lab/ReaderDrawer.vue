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
          >BOOK</a
        >
      </div>

      <div class="slide-container">
        <transition name="slide">
          <div v-if="tab == 0" :key="0" class="slide-item">
            <WordCardMandarin
              v-for="word in processedWord"
              :key="word.id"
              :word="word"
            ></WordCardMandarin>
          </div>

          <div v-if="tab == 1" :key="1" class="slide-item">
            <p>rank : {{ wordStatistics.rank }}</p>
            <p>freq in corpus : {{ wordStatistics.freq }}</p>
          </div>
          <div v-if="tab == 2" :key="2" class="slide-item">
            <span>My third tab</span>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import WordCardMandarin from "@/components/lab/WordCardMandarin.vue";

export default {
  components: {
    WordCardMandarin
  },
  props: {
    clickedWord: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      processedWord: null,
      wordStatistics: {},
      tab: 0
    };
  },
  watch: {
    clickedWord(newValue) {
      apiBooks
        .get("/api/words/mandarin/", {
          params: {
            simplified: newValue
          }
        })
        .then(({ data }) => {
          // console.log("clickedWord watcher ReaderDrawer", data);
          this.processedWord = this.wordJSONToObject(data);
        });
      apiBooks
        .get("/api/words/mandarin/word_statistics", {
          params: {
            word: newValue
          }
        })
        .then(({ data }) => {
          // console.log("clickedWord watcher statistics", data);
          this.wordStatistics = data;
        });
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
