<template>
  <div id="reader-tool">
    <ReaderDrawer v-show="showReaderDrawer" />
    <transition name="slide-fade">
      <div
        id="reader-content"
        :style="
          showReaderDrawer
            ? 'padding-left:10px;padding-right:310px'
            : 'padding-left:160px;padding-right:160px'
        "
        @click="drawerHandler"
      >
        <h1>{{ bookName }}</h1>
        <h2>Chapter {{ chapterNumber }}</h2>
        <div>
          <router-link
            v-if="chapterNumber > 1"
            class="book-link"
            :to="{
              name: 'reader-tool',
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
              name: 'reader-tool',
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
        <button v-if="loggedIn" @click="switchStylingKnownWords()">
          button
        </button>
        <div class="text-container" :class="isActiveColor ? 'active' : ''">
          <span
            v-for="(token, key) in chapterText"
            :key="key"
            :isKnown="$store.state.userKnownWordsDict[token]"
            @click="wordInfo"
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
            @contextmenu.prevent="openContextMenu"
            >{{ token }}</span
          >
          <!-- @click="toggleIsKnown" -->
        </div>
        <Burger />
        <contextMenu></contextMenu>
      </div>
    </transition>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";
import contextMenu from "@/components/contextMenu.vue";
import Burger from "@/components/lab/Burger.vue";
import ReaderDrawer from "@/components/lab/ReaderDrawer.vue";

export default {
  components: {
    contextMenu: contextMenu,
    Burger: Burger,
    ReaderDrawer: ReaderDrawer
  },
  props: ["bookName", "targetLanguage", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: true,
      hoveredWord: null,
      showReaderDrawer: false
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
    // document.addEventListener("click", () => {
    //   if (this.hoveredWord && !this.showReaderDrawer) {
    //     this.showReaderDrawer = true;
    //   }
    //   if (!this.hoveredWord && this.showReaderDrawer) {
    //     this.showReaderDrawer = false;
    //   }
    // });
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
      this.$forceUpdate();
    },
    wordInfo: function(e) {
      console.log(e.target.innerText);
      apiBooks
        .get("/api/words/mandarin/", {
          params: {
            simplified: e.target.innerText
          }
        })
        .then(({ data }) => {
          console.log(data);
        });
    },
    openContextMenu: function(e) {
      console.log("the event in parent", e);
      this.$emit("openContextMenu", e);
    },
    mouseEnter: function(e) {
      this.hoveredWord = e.target;
    },
    mouseLeave: function() {
      this.hoveredWord = null;
    },
    toggleDrawer: function() {
      this.showReaderDrawer = !this.showReaderDrawer;
    },
    drawerHandler: function() {
      if (this.hoveredWord && !this.showReaderDrawer) {
        this.showReaderDrawer = true;
      }
      if (!this.hoveredWord && this.showReaderDrawer) {
        this.showReaderDrawer = false;
      }
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

/* .active > span[isKnown="true"] {
  color:#00ff80; 
} */

.text-container {
  white-space: pre-line;
  font-size: 28px;
}

.text-container > span:hover {
  background-color: #39b982;
  cursor: pointer;
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
