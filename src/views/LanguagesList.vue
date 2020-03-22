<template>
  <div>
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
import EventService from "@/services/EventService.js";
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
    EventService.getLanguages()
      .then(response => {
        this.languages = response.data.languages;
      })
      .catch(error => {
        console.log("there was an error :" + error.response);
      });
  }
};
</script>

<style></style>
