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
    <div :class="isActiveColor ? 'active' : ''">
      <span
        @=""
        v-for="(token, key) in chapterText"
        :key="key"
        :isKnown="$store.state.userKnownWordsDict[token]"
        >{{ token }}</span
      >
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";

export default {
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
      ApiService.getBook(this.$route.params)
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
        })
        .catch(error => {
          console.log("there was an error :" + error.response);
        });
    },
    switchStylingKnownWords() {
      this.isActiveColor = !this.isActiveColor;
    }
  }
};
</script>

<style scoped>
.active > span {
  color: red;
}

.active > span[isKnown="true"] {
  color: green;
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
