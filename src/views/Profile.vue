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
            :class="tab === 'known-words' ? 'active' : ''"
            @click="btnTabClick"
          >Known Words</a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
  
</template>

<script>
import { apiReaditeasy } from "@/services/ApiService.js";

export default {
  data() {
    return {
      tab: "info"
    };
  },
  created() {
    apiReaditeasy.get("/api/books/languages").then(response => {
      this.languages = response.data.languages;
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

<style lang="scss">
.languageshelf {
  // background-color: lighten($color: $primary-color, $amount: 40);
  background-color: white;
  background-color: rgb(238, 238, 238);
  padding: 20px 50px;
  min-height: calc(100vh - 60px);

  &__content {
    // background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
  }

  &__hr {
    border-top: 1px solid #e3e3e3;
    border-bottom: none;
    margin: 30px 0 40px 0;
  }
}
</style>
