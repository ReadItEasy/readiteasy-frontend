<template>
  <div class="word-card">
    <p>{{ word.simplified }}</p>
    <p>{{ word.traditional }}</p>
    <p>{{ word.pronunciation }}</p>
    <p>{{ word.definitions }}</p>
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers.js";
export default {
  props: ["word"],
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
  }
};
</script>

<style scoped>
.word-card {
  border-style: solid none solid none;
  border-width: 1px;
  border-color: grey;
}
</style>
