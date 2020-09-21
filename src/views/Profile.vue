<template>
  <div>
    <h1>Profile</h1>
    
    <div class="bookshelf__content">
      <ul class="filter-subnav">
        <li>
          <a
            title="info"
            class="filter-subnav__link"
            :class="tab === 'info' ? 'active' : ''"
            @click="btnTabClick"
          >User Info</a>
        </li>
        <li class="filter-subnav__item">
          <a
            title="known-words"
            class="filter-subnav__link"
            :class="tab === 'knownWords' ? 'active' : ''"
            @click="btnTabClick"
          >Known Words</a>
        </li>
      </ul>
      <hr class="bookshelf__hr" />
    </div>
    <router-view />
  </div>
  
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";

export default {
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
  },
  methods: {
    btnTabClick: function(e) {
      let clickedTab = e.target.getAttribute("title");

      if (this.tab != clickedTab) {
        this.tab = clickedTab;
      }

      this.$router.push({ path: `/profile/${clickedTab}` });
    }
  }
};
</script>

<style lang="scss"></style>
