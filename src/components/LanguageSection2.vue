<template>
  <div class="language-section">
    <!-- <div class="title">
      <BaseIcon name="book" />
      <span>{{ books.length }} books</span>
      <div class="subheader"></div>
    </div> -->
    <div class="books-section" v-show="showBoolean">
      <BookCard
        v-for="bookName in books"
        :key="bookName"
        :bookName="bookName"
        :targetLanguage="targetLanguage"
      />
    </div>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import { authComputed } from "@/store/helpers.js";
import BookCard from "@/components/BookCardHorizontal.vue";

export default {
  components: {
    BookCard
  },
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
    if (this.loggedIn) {
      for (const bookName of this.books) {
        apiReaditeasy
          .get(`/api/users/${this.$store.state.user.userId}/book_known_words`, {
            params: {
              bookName: bookName,
              targetLanguage: this.targetLanguage
            }
          })
          .then(({ data }) => {
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

<style lang="scss" scoped>
/* .books-section {
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
} */
.books-section {
  /* display: grid; */
  list-style: none;
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
