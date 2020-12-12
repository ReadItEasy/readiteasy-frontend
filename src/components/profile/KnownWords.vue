<template>
  <div class="languageshelf__content">
    <ul class="filter-subnav">
        <li>
          <a
            title="mandarin"
            class="filter-subnav__link"
            :class="tab === 'mandarin' ? 'active' : ''"
            @click="btnTabClick"
          >Mandarin</a>
        </li>
        <li class="filter-subnav__item">
          <a
            title="english"
            class="filter-subnav__link"
            :class="tab === 'english' ? 'active' : ''"
            @click="btnTabClick"
          >English</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    targetLanguage: String
  },
  data() {
    return {
      tab: "mandarin"
    };
  },
  methods: {
    btnTabClick: function(e) {
      let clickedTab = e.target.getAttribute("title");

      if (this.tab != clickedTab) {
        this.tab = clickedTab;
      }

      this.$router.push({ path: `/profile/known-words/${clickedTab}` });
    }
  }
};
</script>

<style></style>
