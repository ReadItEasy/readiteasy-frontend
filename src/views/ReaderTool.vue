<template>
  <div id="book-show">
    <ReaderDrawer
      :drawerBool="drawerBool"
      :clickedWord="clickedWord"
      :wordData="wordData"
    />
    <v-content class="py-0 px-0">
      <h1 @click="closeDrawer">{{ bookName }}</h1>
      <h2>Chapter {{ chapterNumber }}</h2>
      <v-container>
        <v-pagination
          v-model="page"
          :circle="false"
          :disabled="false"
          :length="10"
          :page="page"
          :total-visible="10"
        ></v-pagination>
      </v-container>
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
      <div class="text-container" :class="lightenUknWordsBool ? 'active' : ''">
        <span
          v-for="(token, key) in chapterText"
          :key="key"
          :isKnown="$store.state.userKnownWordsDict[token]"
          :class="$store.state.userKnownWordsDict[token] ? 'notknown' : ''"
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
      isActiveColor: null,
      lightenUknWordsBool: null,
      drawerBool: false,
      clickedWord: null,
      wordData: null,
      page: 2
    };
  },
  watch: {
    "$route.params": function() {
      this.onLoad();
    }
  },
  created() {
    this.onLoad();
    EventBus.$on("lightenUknWordsBoolChange", lightenUknWordsBool => {
      console.log("event caught in parent", lightenUknWordsBool);
      this.lightenUknWordsBool = lightenUknWordsBool;
    });
  },
  mounted() {
    document.addEventListener("keydown", () => {
      if (event.keyCode == "65" && this.hoveredWordSpan) {
        let hoveredWordText = this.hoveredWordSpan.innerText;
        this.$store.dispatch("toggleKnownWord", hoveredWordText);
      }
    });
  },
  methods: {
    onLoad() {
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
    wordInfo: function(e) {
      this.clickedWord = e.target;

      if (this.drawerBool == false) {
        this.drawerBool = !this.drawerBool;
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
      EventBus.$emit("openContextMenu", e);
    },
    mouseEnter: function(e) {
      this.hoveredWordSpan = e.target;
    },
    mouseLeave: function() {
      this.hoveredWordSpan = null;
    },
    closeDrawer: function() {
      this.drawerBool = false;
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

.active > .notknown {
  color: red;
}

.text-container {
  white-space: pre-line;
  font-size: 32px;
}

.text-container > span {
  /* transition: 0.3s; */
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

.v-pagination {
  align-items: center;
  display: inline-flex;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  width: 100%;
}
</style>
