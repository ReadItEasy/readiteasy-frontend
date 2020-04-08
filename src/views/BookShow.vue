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
    <button v-if="loggedIn" @click="switchStylingKnownWords()">button</button>
    <div class="text-container" :class="isActiveColor ? 'active' : ''">
      <span
        v-for="(token, key) in chapterText"
        :key="key"
        :isKnown="$store.state.userKnownWordsDict[token]"
        @click="toggleIsKnown"
        @contextmenu.prevent="openContextMenu"
        >{{ token }}</span
      >
    </div>
    <contextMenu></contextMenu>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";
import contextMenu from "@/components/contextMenu.vue";

export default {
  components: {
    contextMenu: contextMenu
  },
  props: ["bookName", "targetLanguage", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isActiveColor: true
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
  methods: {
    onLoad() {
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
      this.$store.dispatch("toggleKnownWord", textContent);
      this.$forceUpdate();
    },
    openContextMenu: function(e) {
      console.log("the event in parent", e);
      this.$emit("openContextMenu", e);
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
