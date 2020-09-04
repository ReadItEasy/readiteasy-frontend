<template>
  <div id="nav" class="nav header">
    <template>
      <Burger class="nav-item" />
      <Sidebar>
        <nav @click="clickLinkToggleNav" class="sidebar-panel-nav">
          <router-link :to="{ name: 'books' }">Books</router-link>
          <template v-if="!loggedIn">
            <router-link :to="{ name: 'login' }">Login</router-link>
            <router-link :to="{ name: 'register' }">Register</router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'profile' }">Profile</router-link>
            <a @click.prevent="logout" href>Logout</a>
          </template>
        </nav>
      </Sidebar>
    </template>
    <router-link to="/" class="brand nav-item">ReadItEasy</router-link>
    <button
      v-show="$route.name == 'reader-tool'"
      class="settings-btn"
      id="settings__opener"
      @click="toggleShowSettings()"
    >
      <BaseIcon :color="$store.state.settings.showSettings ? '#39b982' : ''" name="settings"></BaseIcon>
    </button>
    <div v-show="$route.name == 'reader-tool'">
      <Settings />
    </div>
  </div>
</template>

<script>
import Burger from "./Burger.vue";
import Sidebar from "./LeftDrawer.vue";
import Settings from "./Settings.vue";
import { authComputed } from "@/store/helpers.js";

export default {
  components: {
    Burger,
    Sidebar,
    Settings
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    clickLinkToggleNav(e) {
      if (e.target.tagName == "A") {
        this.$store.dispatch("toggleNav");
      }
    },
    toggleShowSettings() {
      this.$store.dispatch("toggleShowSettings");
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
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 20px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
  padding: 0 20px;
}
/* .nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
} */
/* nav > a {
  margin-right: 10px;
} */

.router-link-exact-active {
  color: rgb(138, 124, 124) !important;
}

.sidebar-panel-nav > a {
  color: #39b982;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

.settings-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  transition: all 0.2s;
}

.settings-btn:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.2s;
}

.settings-btn:focus {
  outline: none;
  box-shadow: none;
}

.settings-btn:active {
  fill: #39b982;
}

.icon {
  margin: 0;
}
</style>
