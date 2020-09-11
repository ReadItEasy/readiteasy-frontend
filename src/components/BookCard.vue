<template>
  <div class="book-card">
    <div class="book-card__header">
      <router-link
        class="book-card__title"
        :to="{
            name: 'reader-tool',
            params: {
              bookName: bookName,
              targetLanguage: targetLanguage,
              chapterNumber: 1
            }
          }"
      >{{ bookName.split("_").join(" ") }}</router-link>
    </div>
    <div class="book-card__statistics">
      <template v-if="booksStatistics">
        <p v-if="booksStatistics[bookName]">
          book lenght : {{ booksStatistics[bookName].n_book_tokens }}
          <br />
          book unique words : {{ booksStatistics[bookName].n_book_types }}
          <br />
          known words : {{ booksStatistics[bookName].n_user_tokens }}
          <br />
          ratio known words :
          {{
          (
          (100 * booksStatistics[bookName].n_user_tokens) /
          booksStatistics[bookName].n_book_tokens
          ).toFixed(2)
          }}
          %
          <br />
          95% percentile word :
          {{ booksStatistics[bookName].book_char_95percentile }}
          <br />
          95% percentile rank :{{
          booksStatistics[bookName].book_rank_95percentile
          }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";

export default {
  props: {
    bookName: String,
    targetLanguage: String
  },
  data() {
    return {
      booksStatistics: {}
    };
  },
  created() {
    if (this.loggedIn) {
      apiReaditeasy
        .get(`/api/users/${this.$store.state.user.userId}/book_known_words`, {
          params: {
            bookName: this.bookName,
            targetLanguage: this.targetLanguage
          }
        })
        .then(({ data }) => {
          this.$set(this.booksStatistics, this.bookName, data);
          // this.booksStatistics[bookName] = data;
        });
    }
  },
  computed: {
    ...authComputed
  }
};
</script>

<style lang="scss" scoped>
.book-card {
  // border: 1px grey solid;
  border-radius: 15px;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
  background-color: #e8f4ff;

  // box shadow
  -webkit-box-shadow: 11px 12px 14px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 12px 14px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 12px 14px -15px rgba(0, 0, 0, 0.75);

  &__header {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    background-color: $primary-color;
  }

  &__title {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    color: white;
    font-family: "Courier New", Courier, monospace;
  }

  &__statistics {
    padding: 30px;
  }

  :hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px) translateX(2px);
      -webkit-box-shadow: 11px 12px 14px -19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 12px 14px -19px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 12px 14px -19px rgba(0, 0, 0, 0.75);
  }
}
/* * {
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
  align-items: center; 
  align-content: center;
}


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
} */
</style>
