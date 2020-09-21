<template>
  <div v-if="targetLanguage">
    <h1>Known Words</h1>
    <ul id="example-1">
      <li v-for="word in $store.getters.knownDict" :key="word">
        {{ word }}
      </li>
    </ul>
    <h2>below the list</h2>
  </div>
  <div v-else>

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
  methods: {}
};
</script>

<style></style>
