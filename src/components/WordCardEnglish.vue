<template>
  <div class="word-card container">
    <span class="item1a form">{{ englishWord.form }}</span>
    <span class="item1b pos">{{ englishWord.POS.replace(/_/g, " ") }}</span>
    <!-- <span class="item1b traditional"></span> -->
    <span class="item2 pronunciation">{{ englishWord.pronunciation }}</span>
    <ul class="item3">
      <li v-for="(definition, index) of englishWord.definitions" :key="index">
        {{ definition }}
      </li>
    </ul>
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers.js";
export default {
  props: ["englishWord"],
  data() {
    return {
      isKnown: false
    };
  },
  methods: {
    toggleIsKnown() {
      this.$store.dispatch("toggleKnownWord", this.word.simplified);
      this.$forceUpdate();
    }
  },
  computed: {
    ...authComputed
  },
};
</script>

<style scoped>
.word-card {
  /* border-style: solid none solid none;
  border-width: 1px;
  border-color: grey; */
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-family: "Noto Sans";
  /* -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5); */
}

.container {
  display: grid;
  padding: 5%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto;
  row-gap: 10px;
  /* overflow-y: scroll; */
}

.item1a {
  grid-column-start: 1;
  grid-column-end: 2;

  grid-row-start: 1;
  grid-row-end: 2;
}

.item1b {
  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 1;
  grid-row-end: 2;
}

.item2 {
  grid-column-start: 1;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;
}

.item3 {
  grid-column-start: 1;
  grid-column-end: 3;

  grid-row-start: 3;
  grid-row-end: 4;
}

ul {
  margin: 0;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

.form {
  text-decoration: underline;
}

.pos {
  font-size: 16px;
  text-align: right;
  font-style: italic;
}

.pronunciation {
  font-weight: 800;
}
</style>
