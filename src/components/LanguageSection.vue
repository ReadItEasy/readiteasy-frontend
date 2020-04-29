<template>
  <div class="language-card">
    <div class="title">
      <h2 @click="switchShow()">{{ targetLanguage }}</h2>
      <BaseIcon name="book" />
      <span>{{ books.length }} books</span>
      <div class="subheader"></div>
    </div>
    <div class="books-section" v-show="showBoolean">
      <div v-for="bookName in books" :key="bookName" class="book-card">
        <router-link
          class="book-link"
          :to="{
            name: 'reader-tool',
            params: {
              bookName: bookName,
              targetLanguage: targetLanguage,
              chapterNumber: 1
            }
          }"
        >
          {{ bookName }}
        </router-link>
        <template v-if="booksStatistics">
          <p v-if="booksStatistics[bookName]">
            book lenght : {{ booksStatistics[bookName].n_book_tokens }} <br />
            book unique words : {{ booksStatistics[bookName].n_book_types }}
            <br />
            known words : {{ booksStatistics[bookName].n_user_tokens }} <br />
            ratio known words :
            {{
              (
                (100 * booksStatistics[bookName].n_user_tokens) /
                booksStatistics[bookName].n_book_tokens
              ).toFixed(2)
            }}
            % <br />
            95% percentile word :
            {{ booksStatistics[bookName].book_char_95percentile }} <br>
            95% percentile rank :{{ booksStatistics[bookName].book_rank_95percentile }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";

export default {
  props: {
    targetLanguage: String,
    books: Array
  },
  data() {
    return {
      showBoolean: true,
      booksStatistics: {}
    };
  },
  created() {
    console.log("TEST");
    console.log(this.loggedIn);
    if (this.loggedIn) {
      console.log("LOGGED IN");
      for (const bookName of this.books) {
        apiBooks
          .get(`/api/users/${this.$store.state.userId}/book_known_words`, {
            params: {
              bookName: bookName,
              targetLanguage: this.targetLanguage
            }
          })
          .then(({ data }) => {
            console.log(data);
            this.$set(this.booksStatistics, bookName, data);
            // this.booksStatistics[bookName] = data;
          });
      }
    }
  },
  methods: {
    switchShow() {
      this.showBoolean = !this.showBoolean;
    }
  },
  computed: {
    ...authComputed
  }
};
</script>

<style scoped>
* {
  margin: 0px;
}

.language-card {
  padding: 1rem;
  transition: all 0.25s ease-out;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.title {
  margin: 20px 0px;
}

.subheader {
  display: inline-flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center;
}

/* .title h3 {
  display: inline;
} */

.book-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: 1px grey;
  height: auto;
}
.book-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
