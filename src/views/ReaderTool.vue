<template>
  <div id="reader-tool">
    <v-touch @swiperight="doSomething">
      <ReaderDrawer
        v-show="showReaderDrawer"
        :clickedWord="clickedWord"
        :bookName="bookName"
        :targetLanguage="targetLanguage"
      />
    </v-touch>
    <transition name="slide-fade">
      <div
        id="reader-content"
        :style="
          $mq === 'tablet' || $mq === 'mobile'
            ? 'no-resize'
            : showReaderDrawer
            ? 'padding-left:10px;padding-right:310px'
            : 'padding-left:160px;padding-right:160px'
        "
        @click="onClickHandler"
      >
        <h1>{{ bookName.replace(/_/g, " ") }}</h1>
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
        <div
          class="text-container"
          :class="isActiveColor && loggedIn ? 'active' : ''"
        >
          <span
            v-for="(token, key) in chapterText"
            :key="key"
            :isKnown="$store.state.userKnownWordsDict[token]"
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
            @contextmenu.prevent="openContextMenu"
            >{{ token }}</span
          >
          <!-- @click="toggleIsKnown" -->
        </div>
        <contextMenu></contextMenu>
      </div>
    </transition>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";
import ContextMenu from "@/components/ContextMenu.vue";
import ReaderDrawer from "@/components/ReaderDrawer.vue";
export default {
  components: {
    ContextMenu: ContextMenu,
    ReaderDrawer: ReaderDrawer
  },
  props: ["bookName", "targetLanguage", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: true,
      hoveredWord: null,
      showReaderDrawer: false,
      clickedWord: ""
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
      if (event.keyCode == "65" && this.hoveredWord && this.loggedIn) {
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
      // console.log("apiBooks.defaults.headers", apiBooks.defaults.headers);
      apiBooks
        .get("/api/books/book", {
          params: this.$route.params
        })
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
          // })
          // .catch(error => {
          //   console.log("there was an error :" + error.response);
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
      // console.log(e.target.innerText);
      apiBooks.get("/api/words/mandarin/", {
        params: {
          simplified: e.target.innerText
        }
        // })
        // .then(({ data }) => {
        //   console.log(data);
      });
    },
    openContextMenu: function(e) {
      // console.log("the event in parent", e);
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
    onClickHandler: function() {
      this.drawerHandler();
      if (this.hoveredWord) {
        this.clickedWord = this.hoveredWord.innerText;
      }
    },
    drawerHandler: function() {
      if (this.hoveredWord && !this.showReaderDrawer) {
        this.showReaderDrawer = true;
      }
      if (!this.hoveredWord && this.showReaderDrawer) {
        this.showReaderDrawer = false;
      }
    },
    doSomething: function() {
      if (this.showReaderDrawer) {
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
#reader-tool {
  max-width: 100%;
}

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
.text-container > span {
  /* transition: 0.3s; */
  border-radius: 5px;
  padding: 5px 0px;
  font-family: "Noto Sans", "Noto Sans CJK SC", sans-serif;
  /* margin: 0px; */
}
.text-container > span:hover {
  /* transition: .3s; */
  background-color: #35ea614d;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
}

.text-container > span::selection {
  /* transition: .3s; */
  background-color: red;
  /* cursor: pointer; */
  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
}
/* .text-container > span:hover {
  background-color: #39b982;
  cursor: pointer;
} */
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
