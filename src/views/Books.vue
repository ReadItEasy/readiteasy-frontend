<template>
  <div class="bookshelf">
    <div class="bookshelf__content">
      <ul class="filter-subnav">
        <li>
          <a
            title="mandarin"
            class="filter-subnav__link"
            :class="tab === 'mandarin' ? 'active' : ''"
            @click="btnTabClick"
          >mandarin</a>
        </li>
        <li class="filter-subnav__item">
          <a
            title="english"
            class="filter-subnav__link"
            :class="tab === 'english' ? 'active' : ''"
            @click="btnTabClick"
          >english</a>
        </li>
      </ul>
      <hr class="bookshelf__hr" />
      <LanguageSection v-if="language" :targetLanguage="language.lang" :books="language.books" />
      <!-- <div v-for="(language, index) in languages.filter(function(language){return language.lang==tab})" :key="index">
        <LanguageSection :targetLanguage="language.lang" :books="language.books" />
      </div>-->
    </div>
  </div>
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";
import LanguageSection from "@/components/LanguageSection2.vue";

export default {
  components: {
    LanguageSection: LanguageSection
  },
  data() {
    return {
      languages: [],
      tab: "mandarin"
    };
  },
  created() {
    apiReaditeasy.get("/api/books/languages").then(response => {
      this.languages = response.data.languages;
      console.log("KK typeof ", typeof this.languages, this.languages);
      // })
      // .catch(error => {
      //   console.log("there was an error :" + error.response);
    });
  },
  methods: {
    btnTabClick: function(e) {
      let clikedTab = e.target.getAttribute("title");

      if (this.tab != clikedTab) {
        this.tab = clikedTab;
      }
    }
  },
  computed: {
    language() {
      const language = this.languages.filter(language => {
        return language.lang === this.tab;
      });
      console.log("KK language", language);
      return language[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.bookshelf {
  // background-color: lighten($color: $primary-color, $amount: 40);
  background-color: white;
  background-color: rgb(238, 238, 238);
  padding: 20px 50px;
  min-height: calc(100vh - 60px);

  &__content {
    // background-color: white;
    padding: 30px;
    border-radius: 10px;
  }

  &__hr {
    border-top: 1px solid #e3e3e3;
    border-bottom: none;
    margin: 30px 0 40px 0;
  }
}

.filter-subnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  &__item {
    margin: 0px 10px;
  }

  &__link {
    cursor: pointer;
    color: grey;

    &:hover {
      color: darken(grey, 20%);
    }
    &.active {
      color: $primary-color;
      font-weight: bolder;
    }
  }
}
</style>
