<template>
  <div>
    <button @click="setPage">next page</button>
    <!-- <div 
      :style="`font-size:${$store.state.settings.fontSize}px`"
    ></div> -->
    <div
      class="text-container"
      id="text-page"
      :class="$store.state.settings.showUnknown && loggedIn ? 'active' : ''"
      :style="`font-size:${$store.state.settings.fontSize}px`"
      ref="textPage"
    >
      <!-- <span
      v-for="(token, key) in chapterText2"
      :key="key"
      :is-known="$store.state.userWords.knownDict[token.toLowerCase()]"
      :is-study="$store.state.userWords.studyDict[token.toLowerCase()]"
      :is-punct="isPunctDict[token]"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @contextmenu.prevent="openContextMenu"
      >{{ token }}</span
    > -->
    </div>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import { authComputed, bookState } from "@/store/helpers.js";

export default {
  props: ["bookName", "chapterNumber"],
  data() {
    return {
      chapterText: null,
      chapterText2: null,
      hoveredWord: null,
      chapterTextStartIndex: 0,
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
    bookName: function() {
      this.onLoad();
    },
    "$store.state.settings.fontSize": function() {
      if (this.chapterText) {
        setTimeout(this.setPage, 1);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", () => {
      if (
        event.keyCode == "65" &&
        this.$store.state.reader.hoveredWord &&
        this.loggedIn
      ) {
        this.toggleIsKnown(this.$store.state.reader.hoveredWord);
      }
    });
  },
  created() {
    console.log("created");
    this.onLoad();
    this.$store.dispatch("loadLocalStorageSettings");
  },
  methods: {
    onLoad() {
      // console.log("apiReaditeasy.defaults.headers", apiReaditeasy.defaults.headers);
      apiReaditeasy
        .get(`/api/books/${this.targetLanguage}`, {
          params: this.$route.params
        })
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
          this.setPage();
          // this.lemmaText = response.data.tokenized_chapter_lemma;
          // })
          // .catch(error => {
          //   console.log("there was an error :" + error.response);
        });
    },
    mouseEnter: function(e) {
      this.$store.dispatch("setHoveredWord", e.target);
    },
    mouseLeave: function() {
      this.$store.dispatch("setHoveredWord", null);
    },
    toggleIsKnown(wordSpan) {
      // const spanTarget = e.currentTarget;
      let data = {};
      data["word"] = wordSpan.innerText;
      data["targetLanguage"] = this.targetLanguage;
      data["list"] = "known";
      // const textContent = wordSpan.textContent;
      this.$store.dispatch("toggleKnownWord", data);
      // this.$forceUpdate();
    },
    openContextMenu(e) {
      this.$store.dispatch("openContextMenu", e);
    },
    setPage() {
      var containerPage = this.$refs.textPage;
      containerPage.innerHTML = "";
      // var contentParagraph = document.createElement("p");
      // containerPage.appendChild(contentParagraph);

      var clientHeight = document.documentElement.clientHeight;
      this.chapterText2 = []
      var i;
      var array = this.chapterText;
      for (i = 0; i < array.length; i++) {
        if (i < this.chapterTextStartIndex) {
          continue;
        }
        // for (const word of this.chapterText.slice(this.chapterTextStartIndex)) {
        // console.log(word)
        const token = array[i]
        var span = document.createElement("span");
        span.innerHTML = token;
        const isPunct = this.isPunctDict[token] ? true : ""
        span.setAttribute("is-punct", isPunct)
        const isKnown = this.$store.state.userWords.knownDict[token.toLowerCase()] ? true : ""
        span.setAttribute("is-known", isKnown)
        const isStudy = this.$store.state.userWords.studyDict[token.toLowerCase()] ? true : ""
        span.setAttribute("is-study", isStudy)
        containerPage.appendChild(span);
        var rect = span.getBoundingClientRect();
        // console.log(span);
        // console.log(rect.top, rect.bottom, clientHeight);
        if (clientHeight < rect.bottom) {
          containerPage.removeChild(containerPage.lastChild);
          this.chapterTextStartIndex = i;
          break;
        }
        this.chapterText2.push(token)
      }
      // containerPage.innerHTML = "";

      // console.log(textPage)
    }
  },
  computed: {
    ...authComputed,
    ...bookState
    // targetLanguage: function() {
    //   return this.$store.state.book.targetLanguage
    // }
  }
};
</script>

<style>


.active > span:not([is-known="true"]):not([is-punct="true"]) {
  color: red;
}

.active > span[is-study="true"]:not([is-punct="true"]) {
  color: blue;
}

span[is-punct="true"] {
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
</style>
