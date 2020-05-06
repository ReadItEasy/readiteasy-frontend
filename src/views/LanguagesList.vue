<template>
  <div class="languages">
    <h1>Languages</h1>
    <div v-for="(language, index) in languages" :key="index">
      <LanguageSection
        :targetLanguage="language.lang"
        :books="language.books"
      />
    </div>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import LanguageSection from "@/components/LanguageSection.vue";

export default {
  components: {
    LanguageSection: LanguageSection
  },
  data() {
    return {
      languages: {}
    };
  },
  created() {
    apiReaditeasy.get("/api/books/languages").then(response => {
      this.languages = response.data.languages;
      // console.log(response.data)
      // })
      // .catch(error => {
      //   console.log("there was an error :" + error.response);
    });
  }
};
</script>

<style scoped></style>
