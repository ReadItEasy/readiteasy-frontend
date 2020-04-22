<template>
  <transition name="slide-fade">
    <div id="reader-drawer" class="drawer">
      <span class="clicked-word">{{ clickedWord }}</span>
      <tabs>
        <tab name="Words" :selected="true">
          <WordCardMandarin
            v-for="word in processedWord"
            :key="word.id"
            :word="word"
          ></WordCardMandarin>
        </tab>
        <tab name="Statistics">
          <h1>Add Statistics</h1>
        </tab>
        <tab name="Others">
          <h1>Add Others</h1>
        </tab>
      </tabs>
    </div>
  </transition>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import WordCardMandarin from "@/components/lab/WordCardMandarin.vue";
import tab from "@/components/lab/Tab.vue";
import tabs from "@/components/lab/Tabs.vue";

export default {
  components: {
    WordCardMandarin,
    tab,
    tabs
  },
  props: {
    clickedWord: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      processedWord: null
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
          console.log("clickedWord watcher ReaderDrawer", data);
          this.processedWord = this.wordJSONToObject(data);
        });
    }
  },
  methods: {
    wordJSONToObject: function(wordJSON) {
      if (wordJSON) {
        console.log("COMP", wordJSON);
        var clickedWordProcessed = [];
        for (var word of wordJSON) {
          console.log("check", word.definitions.split("/").filter(Boolean));
          word.definitions = word.definitions.split("/").filter(Boolean);
          clickedWordProcessed.push(word);
        }
        console.log("finished list", clickedWordProcessed);
        return clickedWordProcessed;
      } else {
        return null;
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
</style>
