<template>
  <div class="navbar">
    <div class="navbar__front fixed nav header">
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
      <div id="reader-teleport" v-if="$route.name == 'reader-tool'">
        <div id="pagintation">
          <Pagination />
        </div>
        <button class="settings-btn" id="settings__opener" @click="toggleShowSettings()">
          <BaseIcon :color="$store.state.settings.showSettings ? '#39b982' : ''" name="settings"></BaseIcon>
        </button>
        <div>
          <Settings />
        </div>
      </div>
    </div>
    <div class="navbar__reajuster"></div>
  </div>
</template>

<script>
import Burger from "./Burger.vue";
import Sidebar from "./LeftDrawer.vue";
import Settings from "./Settings.vue";
import { authComputed } from "@/store/helpers.js";

import Pagination from "@/components/lab/Pagination2.vue";

export default {
  components: {
    Burger,
    Sidebar,
    Settings,
    Pagination
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

<style lang="scss" scoped>
.navbar__reajuster {
  height: 60px;
  position: relative;
  top: 0;
  /* padding: 0 5%; */
  text-align: left;
}

.fixed {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 60px;
  z-index: 100;
  background-color: white;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  z-index: 5;
}

.navbar__front {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 20px;
}
.navbar__front > .brand {
  font-family: $alt-font;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
  padding: 0 20px;
}

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

#reader-teleport {
  margin-left: auto;
  display: flex;
  flex-direction: row;
}

#pagintation {
  margin: 0 10px;
  display: flex;
}

.settings-btn {
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
