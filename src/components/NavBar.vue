<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">ReadItEasy</router-link>
    <nav>
      <router-link :to="{ name: 'languages' }">Languages</router-link> |
      <router-link :to="{ name: 'language-detector' }">Detector</router-link> |
      <router-link v-if="!loggedIn" :to="{ name: 'login' }">Login</router-link> |
      <router-link v-if="!loggedIn" :to="{ name: 'register' }">Register</router-link>
      <a v-else @click.prevent="logout" href="">Logout</a>
    </nav>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers.js";

export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    ...authComputed
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
