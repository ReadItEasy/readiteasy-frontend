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
        <Pagination
          :page="chapterNumber"
          :bookName="bookName"
          :targetLanguage="targetLanguage"
        />
        <div
          class="text-container"
          :class="$store.state.settings.showUnknown && loggedIn ? 'active' : ''"
          :style="`font-size:${$store.state.settings.fontSize}px`"
        >
          <span
            v-for="(token, key) in chapterText"
            :key="key"
            :position="key"
            :isKnown="$store.state.userWords.knownDict[token.toLowerCase()]"
            :isStudy="$store.state.userWords.studyDict[token.toLowerCase()]"
            :isPunct="isPunctDict[token]"
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
            @contextmenu.prevent="openContextMenu"
            >{{ token }}</span
          >
        </div>
        <Pagination
          :page="chapterNumber"
          :bookName="bookName"
          :targetLanguage="targetLanguage"
        />
        <contextMenu :targetLanguage="targetLanguage"></contextMenu>
      </div>
    </transition>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import { authComputed, bookState } from "@/store/helpers.js";
import ContextMenu from "@/components/ContextMenu.vue";
import ReaderDrawer from "@/components/ReaderDrawer.vue";
import Pagination from "@/components/lab/Pagination.vue";
export default {
  components: {
    ContextMenu: ContextMenu,
    ReaderDrawer: ReaderDrawer,
    Pagination: Pagination
  },
  props: ["bookName", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: true,
      hoveredWord: null,
      showReaderDrawer: false,
      clickedWord: "",
      ontouchmove: false,
      // TODO: move this isPunctDict in a dedicated file
      isPunctDict: {
        // english punct
        ".": true,
        "\n": true,
        "\t": true,
        "?": true,
        "!": true,
        " ": true,
        ",": true,
        "’": true,
        // chinese punct
        "，": true,
        "。": true,
        "”": true,
        "“": true,
        "：": true,
        "《": true,
        "》": true,
        "—": true,
        "；": true
      }
    };
  },
  watch: {
    "$route.params": function() {
      this.onLoad();
    }
  },
  created() {
    this.onLoad();
    this.$store.dispatch("loadLocalStorageSettings");
  },
  mounted() {
    document.addEventListener("keydown", () => {
      if (event.keyCode == "65" && this.hoveredWord && this.loggedIn) {
        this.toggleIsKnown(this.hoveredWord);
      }
    });
    document.addEventListener("touchmove", () => {
      if (this.ontouchmove == false) {
        this.ontouchmove = true;
      }
    });
    document.addEventListener("touchend", () => {
      if (this.ontouchmove == true) {
        setTimeout(() => {
          this.ontouchmove = false;
        }, 1500);
      }
    });
  },
  methods: {
    onLoad() {
      apiReaditeasy
        .get(`/api/books/${this.targetLanguage}`, {
          params: this.$route.params
        })
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
        });
    },
    switchStylingKnownWords() {
      this.isActiveColor = !this.isActiveColor;
    },
    toggleIsKnown(wordSpan) {
      let data = {};
      data["word"] = wordSpan.innerText;
      data["targetLanguage"] = this.targetLanguage;
      data["list"] = "known";
      this.$store.dispatch("toggleKnownWord", data);
    },
    openContextMenu: function(e) {
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
      if (!this.ontouchmove) {
        this.drawerHandler();
        if (this.hoveredWord) {
          this.clickedWord = this.hoveredWord.innerText;
        }
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
    ...authComputed,
    ...bookState
  }
};
</script>

<style scoped>
#reader-tool {
  max-width: 100%;
}

h1 {
  display: block;
  text-align: center;
}

.active > span:not([isKnown="true"]):not([isPunct="true"]) {
  color: red;
}

.active > span[isStudy="true"]:not([isPunct="true"]) {
  color: blue;
}

span[isPunct="true"] {
  pointer-events: none;
}
.text-container {
  white-space: pre-line;
}
.text-container > span {
  border-radius: 5px;
  padding: 5px 0px;
  font-family: "Noto Sans", "Noto Sans CJK SC", sans-serif;
}
.text-container > span:hover {
  background-color: #35ea614d;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
}

.text-container > span::selection {
  background-color: red;
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

.avoid-clicks {
  pointer-events: none;
}
</style>
