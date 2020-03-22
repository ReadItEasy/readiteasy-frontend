<template>
  <div class="language-section">
    <h3 class="title" @click="switchShow()">{{ targetLanguage }}</h3>
    <div class="books-section" v-show="showBoolean">
      <p a v-for="bookName in books" :key="bookName">
        <router-link
          class="book-link"
          :to="{
            name: 'book-show',
            params: {
              bookName: bookName,
              targetLanguage: targetLanguage,
              chapterNumber: 1
            }
          }"
        >
          {{ bookName }}
        </router-link>
      </p>
    </div>
    <BaseIcon name="phone" />
    <span>{{ books.length }} books</span>
  </div>
</template>

<script>
export default {
  props: {
    targetLanguage: String,
    books: Array
  },
  data() {
    return {
      showBoolean: true
    };
  },
  methods: {
    switchShow() {
      this.showBoolean = !this.showBoolean;
    }
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
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
