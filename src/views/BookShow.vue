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
            textLang: textLang,
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
            textLang: textLang,
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
        :isKnown="userKnownWordsDict[token]"
        >{{ token }}</span
      >
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["bookName", "textLang", "chapterNumber"],
  data() {
    return {
      chapterText: [],
      isKnownDict: [],
      isKnownList: [],
      isKnownDict2: {},
      isActiveColor: true,
      userKnownWordsDict: {}
    };
  },
  watch: {
    "$route.params": function() {
      console.log("watch", this.$route.params);
      this.onLoad();
    },
    "$this.test": function() {
      console.log("this is a test because i'm curious about watchers");
    }
  },
  created() {
    console.log("created", this.$route.params);
    this.onLoad();
  },
  methods: {
    onLoad() {
      console.log("on load", this.$route.params);
      EventService.getBook(this.$route.params)
        .then(response => {
          this.chapterText = response.data.tokenized_chapter_text;
          console.log("text fetched")

          // this.isKnownDict = response.data.is_known_dict;
          // this.isKnownList = response.data.is_known_list_2;
          // this.isKnownDict2 = response.data.is_known_dict_2;
        })
        .catch(error => {
          console.log("there was an error :" + error.response);
        });
      EventService.getUserKnownWords(this.$route.params)
        .then(response => {
          this.userKnownWordsDict = response.data.user_known_words_dict;
          console.log("user known fetched")
        })
        .catch(error => {
          console.log("there was an error :" + error.response);
        });
    },
    switchStylingKnownWords() {
      this.isActiveColor = !this.isActiveColor;
    },
    isInKnownList(token) {
      return this.isKnownList.includes(token);
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
