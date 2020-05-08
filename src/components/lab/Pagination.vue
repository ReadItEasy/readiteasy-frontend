<template>
  <div class="pagination">
    <button :disabled="page == 1" @click="redirect(page - 1)">
      prev
    </button>
    <input v-model="pageInput" type="text" @keyup.enter="redirect(pageInput)" />
    <button @click="redirect(page + 1)">
      next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    bookName: {
      type: String
    },
    targetLanguage: {
      type: String
    }
  },
  data() {
    return {
      pageInput: 1
    };
  },
  created() {
    this.pageInput = this.page;
  },
  watch: {
    page(newValue) {
      this.pageInput = newValue;
    }
  },
  methods: {
    redirect(pageNumber) {
      this.$router
        .push({
          name: "reader-tool",
          params: {
            bookName: this.bookName,
            targetLanguage: this.targetLanguage,
            chapterNumber: parseInt(pageNumber)
          }
        })
        .then(
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        );
    }
  }
};
</script>

<style scoped>
.pagination {
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: center;
}

input {
  text-align: center;
  height: auto;
}

button {
  background-color: #39b982;
  color: white;
  border: 0;
}
</style>
