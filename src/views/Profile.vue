<template>
  <div>
    <h1>Profile</h1>
    <p>
      Hello <strong>{{ $store.state.user.firstName }}</strong
      >. Here will soon be displayed tons of statistics about your known words,
      target languages and time spent reading !
    </p>
    <p>
      You can start reading
      <router-link :to="{ path: '/mandarin/book/活着/1' }">To Live</router-link>
      by Hua Yu
    </p>
    <div v-for="(language, index) in languages" :key="index">
      <LanguageSection
        :targetLanguage="language.lang"
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
      // })
      // .catch(error => {
      //   console.log("there was an error :" + error.response);
    });
  }
};
</script>

<style></style>
