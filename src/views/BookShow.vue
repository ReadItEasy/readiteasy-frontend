<template>
  <div>
    <h1>{{ bookName }}</h1>
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
    <button @click="switchStylingKnownWords()">button</button>
    <div class="text-container" :class="isActiveColor ? 'active' : ''">
      <span
        v-for="(token, key) in chapterText"
        :key="key"
        :isKnown="$store.state.userKnownWordsDict[token]"
        @click="toggleIsKnown"
        @contextmenu.prevent="openMenu"
        >{{ token }}</span
      >
    </div>
    <div
      id="right-click-menu"
      v-show="viewMenu"
      v-on-clickaway="closeMenu"
      ref="rightClickMenu"
    >
      <ul>
        <li>option 1</li>
        <li>option 2</li>
        <li>option 3</li>
        <li>option 2</li>
        <li>option 2</li>
        <li>option 2</li>
        <li>option 2</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ApiService from "@/services/ApiService.js";
import { apiBooks } from "@/services/ApiService.js";
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],

  props: ["bookName", "targetLanguage", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: true,
      viewMenu: false,
      top: "0px",
      left: "0px"
    };
  },
  watch: {
    "$route.params": function() {
      this.onLoad();
    },
    "$this.test": function() {
      console.log("this is a test because i'm curious about watchers");
    }
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      // ApiService.getBook(this.$route.params)
      //   .then(response => {
      //     this.chapterText = response.data.tokenized_chapter_text;
      //   })
      //   .catch(error => {
      //     console.log("there was an error :" + error.response);
      //   });
      console.log("apiBooks.defaults.headers", apiBooks.defaults.headers);
      apiBooks
        .get("/api-books/book", {
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
    toggleIsKnown(e) {
      const spanTarget = e.currentTarget;
      const textContent = spanTarget.textContent;
      this.$store.dispatch("toogleKnownWord", textContent);
      this.$forceUpdate();
    },
    openMenu(e) {
      console.log("openMenu ", e);
      this.viewMenu = true;
      const myfunc = () => {
        let contextMenuDiv = this.$refs.rightClickMenu;
        // console.log("xy", e.layerX, e.layerY);
        // console.log(contextMenuDiv.getBoundingClientRect());
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.clientHeight;
        // console.log("X Y", e.x, e.y);
        const ctxWidth = contextMenuDiv.offsetWidth;
        const ctxHeight = contextMenuDiv.offsetHeight;
        // console.log("Pwidth Pheight", pageWidth, pageHeight);
        // console.log("Cwidth, Cheight", ctxWidth, ctxHeight);
        // console.log("Wwidth, Wheight", window.innerWidth, window.innerHeight);
        // console.log(
        //   "difWidth, difHeig",
        //   pageWidth - (ctxWidth + e.x),
        //   pageHeight - (ctxHeight + e.y)
        // );
        const spaceOffSet = 25;

        const offSetX = Math.min(pageWidth - (ctxWidth + e.x + spaceOffSet), 0);
        const offSetY = Math.min(
          pageHeight - (ctxHeight + e.y + spaceOffSet),
          0
        );
        // console.log(offSetX, offSetY);
        if (offSetY < 0) {
          // console.log("SUCEED", offSetY)
          contextMenuDiv.style.top = e.layerY - ctxHeight + "px";
        } else {
          // console.log("FAIL", offSetY)
          contextMenuDiv.style.top = e.layerY + offSetY + "px";
        }
        if (offSetX < 0) {
          // console.log("SUCEED", offSetX)
          contextMenuDiv.style.left = e.layerX - ctxWidth + "px";
        } else {
          // console.log("FAIL", offSetX)
          contextMenuDiv.style.left = e.layerX + offSetX + "px";
        }
      };
      // set a async because if not, the contextmenu style doesnt generate on time
      // to be able to fetch his size.
      setTimeout(myfunc, 0);
    },
    closeMenu(e) {
      console.log("closeMenu", e);
      this.viewMenu = false;
      let contextMenuDiv = this.$refs.rightClickMenu;
      contextMenuDiv.style.top = -20000 + "px";
    },
    setMenu(top, left) {
      console.log("refs", this.$refs.rightClickMenu);
      var contextMenuDiv = this.$refs.rightClickMenu;
      console.log("contextMenuDiv", contextMenuDiv);

      let largestHeight = window.innerHeight - 250 - 25;
      let largestWidth = window.innerWidth - 250 - 25;

      if (top > largestHeight) {
        top = largestHeight;
      }

      if (left > largestWidth) {
        left = largestWidth;
      }
    }
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
}

.text-container > span:hover {
  background-color: #39b982;
  cursor: pointer;
}
#right-click-menu {
  background: white;
  border: 1px solid #bdbdbd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 250px;
  z-index: 999;
}

#right-click-menu li {
  list-style: none;

  cursor: pointer;
  color: #39b982;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 5px;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #39b982;
  color: white;
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

ul {
  padding: 0 1em;
}
</style>
