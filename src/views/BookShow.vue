<template>
  <div id="book-show">
    <ReaderDrawer
      :navbar="navbar"
      :clickedWord="clickedWord"
      :wordData="wordData"
    />
    <v-content class="mx-5">
      <h1 @click="test">{{ bookName }}</h1>
      <h2>Chapter {{ chapterNumber }}</h2>
      <div>
        <router-link
          v-if="chapterNumber > 1"
          class="book-link"
          :to="{
            name: 'book-show',
            params: {
              bookName: bookName,
              targetLanguage: targetLanguage,
              chapterNumber: parseInt(chapterNumber) - 1
            }
          }"
        >
          <span class="nav-chapter">previous chapter</span>
        </router-link>
        <router-link
          class="book-link"
          :to="{
            name: 'book-show',
            params: {
              bookName: bookName,
              targetLanguage: targetLanguage,
              chapterNumber: parseInt(chapterNumber) + 1
            }
          }"
        >
          <span>next chapter</span>
        </router-link>
      </div>
      <!-- <button v-if="loggedIn" @click="switchStylingKnownWords()">button</button> -->
      <v-btn v-if="loggedIn" @click="switchStylingKnownWords"
        >toggle known words</v-btn
      >
      <v-switch
        v-if="loggedIn"
        v-model="isActiveColor"
        :label="`isActiveColor 1: ${isActiveColor.toString()}`"
      ></v-switch>
      <div class="text-container" :class="isActiveColor ? 'active' : ''">
        <span
          v-for="(token, key) in chapterText"
          :key="key"
          :isKnown="$store.state.userKnownWordsDict[token]"
          @click.prevent="wordInfo"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
          @contextmenu.prevent="openContextMenu"
          >{{ token }}</span
        >
        <!-- @click="toggleIsKnown" -->
      </div>
      <Burger />
      <ContextMenu></ContextMenu>
    </v-content>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";
import EventBus from "@/services/EventBus.js";
import ContextMenu from "@/components/ContextMenu.vue";
import ReaderDrawer from "@/components/lab/ReaderDrawer.vue";
import Burger from "@/components/lab/Burger.vue";

export default {
  components: {
    ContextMenu: ContextMenu,
    Burger: Burger,
    ReaderDrawer: ReaderDrawer
  },
  props: ["bookName", "targetLanguage", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: false,
      hoveredWord: null,
      navbar: false,
      clickedWord: null,
      wordData: null
    };
  },
  watch: {
    "$route.params": function() {
      this.onLoad();
    }
  },
  created() {
    this.onLoad();
  },
  mounted() {
    document.addEventListener("keydown", () => {
      if (event.keyCode == "65" && this.hoveredWord) {
        this.toggleIsKnown(this.hoveredWord);
      }
    });
  },
  methods: {
    onLoad() {
      console.log("apiBooks.defaults.headers", apiBooks.defaults.headers);
      apiBooks
        .get("/api/books/book", {
          params: this.$route.params
        })
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
        })
        .catch(error => {
          console.log("there was an error :" + error.response);
        });
    },
    switchStylingKnownWords() {
      this.isActiveColor = !this.isActiveColor;
    },
    toggleIsKnown(wordSpan) {
      // const spanTarget = e.currentTarget;
      const textContent = wordSpan.textContent;
      this.$store.dispatch("toggleKnownWord", textContent);
      // this.$forceUpdate();
    },
    wordInfo: function(e) {
      this.clickedWord = e.target;

      if (this.navbar == false) {
        this.navbar = !this.navbar;
      }
      // console.log("e.target", e.target);
      apiBooks
        .get("/api/words/mandarin/", {
          params: {
            simplified: e.target.innerText
          }
        })
        .then(({ data }) => {
          this.wordData = data;
          // console.log("then", data);
        });
    },
    openContextMenu: function(e) {
      console.log("the event in parent", e);
      EventBus.$emit("openContextMenu", e);
    },
    mouseEnter: function(e) {
      this.hoveredWord = e.target;
    },
    mouseLeave: function() {
      this.hoveredWord = null;
    },
    test: function() {
      console.log("close drawer");
      this.navbar = false;
    }
  },
  computed: {
    ...authComputed
  }
};
</script>

<style scoped>
.active > span:not([isKnown="true"]) {
  color: red;
}

.active > span[isKnown="true"] {
  /* color:#00ff80; */
}

.text-container {
  white-space: pre-line;
  font-size: 32px;
}

.text-container > span {
  transition: 0.3s;
  border-radius: 5px;
  padding: 5px 0px;
  /* margin: 0px; */
}

.text-container > span:hover {
  /* transition: .3s; */
  background-color: #35ea614d;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
}

.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.nav-chapter {
  margin-right: 1em;
}
</style>
