<template>
  <div class="pagination">
    <BaseIconBtn
      name="arrow-left"
      @click.native="redirect(currentPage - 1 )"
      class="pagination__icon"
    />
    <input
      v-model="pageInput"
      type="text"
      @keyup.enter="redirect(pageInput)"
      class="pagination__input"
    />
    <BaseIconBtn
      name="arrow-right"
      @click.native="redirect(currentPage+1)"
      class="pagination__icon"
    />
  </div>
</template>

<script>
import BaseIconBtn from "@/components/base/BaseIconBtn.vue";

export default {
  components: {
    BaseIconBtn
  },
  data() {
    return {
      pageInput: 1
    };
  },
  created() {
    this.pageInput = this.$route.params.chapterNumber;
  },
  // watch: {
  //   page(newValue) {
  //     this.pageInput = newValue;
  //   }
  // },
  methods: {
    redirect(pageNumber) {
      this.pageInput = pageNumber;
      this.$router
        .push({
          name: "reader-tool",
          params: {
            bookName: this.$route.params.bookName,
            targetLanguage: this.$route.params.targetLanguage,
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
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.params.chapterNumber);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  // margin: 30px auto;
  display: flex;
  flex-direction: row;
  // width: 200px;
  justify-content: center;
  border: solid 1px rgba(0, 0, 0, 0.4);
  padding: 0px 5px;
  border-radius: 15px;
  &__input {
    width: 50px;
    border: none;
    border-left: solid 1px rgba(0, 0, 0, 0.4);
    border-right: solid 1px rgba(0, 0, 0, 0.4);
    margin: 0 4px;
    color: $primary-color;
  }
  &__icon {
    color: rgba(0, 0, 0, 0.4);
    :hover {
      // // fix the border problem filling
      // color:white;
      // background-color: $primary-color;
    }
  }
}

input {
  text-align: center;
  height: auto;
}
</style>
