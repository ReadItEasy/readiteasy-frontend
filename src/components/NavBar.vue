<template>
  <div id="nav" class="nav header">
    <router-link to="/" class="brand">ReadItEasy</router-link>
    <nav>
      <router-link :to="{ name: 'languages' }">Languages</router-link>
      <!-- <router-link :to="{ name: 'language-detector' }">Detector</router-link> -->
      <template v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'register' }">Register</router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'profile' }">Profile</router-link>
        <a @click.prevent="logout" href="">Logout</a>
      </template>
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
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
  padding: 0 10px;
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
nav > a {
  margin-right: 10px;
}

.router-link-exact-active {
  color: rgb(138, 124, 124) !important;
}
</style>
