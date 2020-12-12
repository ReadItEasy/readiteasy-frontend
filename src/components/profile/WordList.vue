<template>
  <div>
      <ul>
      <li v-for="word in knownWords()" :key="word">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    targetLanguage: String,
  },
  data() {
    return {
    };
  },
  computed: {
    knownWords () {
      return this.$store.getters.knownDict;
  }
},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
