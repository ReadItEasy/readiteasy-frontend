<template>
  <div>
    <h1>Profile</h1>
    <p>
      Hello <strong>{{ $store.state.user.firstName }}</strong
      >. Here will soon be displayed tons of statistics about your known words,
      target languages and time spent reading !
    </p>
    <p>
      You can start reading
      <router-link :to="{ path: '/mandarin/book/活着/1' }">To Live</router-link>
      by Hua Yu
    </p>
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

<style lang="scss" scoped></style>
