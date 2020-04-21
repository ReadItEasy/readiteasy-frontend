<template>
  <transition name="slide-fade">
    <div id="reader-drawer" class="drawer">
      <h1>{{ clickedWord }}</h1>
      <WordCardMandarin
        v-for="word in processedWord"
        :key="word.id"
        :word="word"
      ></WordCardMandarin>
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
  position: fixed;
  top: 60px;
  right: 0px;
  height: 100vh;
  width: 300px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  border-style: none none none solid;
  border-color: grey;
  border-width: 1px;
  display: flex;
  flex-direction: column;
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
