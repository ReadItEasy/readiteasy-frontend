<template>
  <div>
    <h1>Known Words</h1>
    <ul id="example-1">
      <li v-for="word in $store.getters.knownDict" :key="word">
        {{ word }}
      </li>
    </ul>
    <h2>below the list</h2>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
