<template>
  <div>
    <h1>Profile</h1>
    <h2>My information :</h2>
    <ul>
      <li>ID : {{ $store.state.userId }}</li>
      <li>Access Token : {{ $store.state.tokens.access }}</li>
      <li>Refresh Token : {{ $store.state.tokens.refresh }}</li>
    </ul>
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
