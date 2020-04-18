<template>
  <div @click="navbar = !navbar">
    <v-navigation-drawer
      v-model="navbar"
      clipped
      app
      right
      fixed
      hide-overlay
      persistent
      width="600px"
      mobile-break-point="30"
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link two-line>
            <v-list-item-content>
              <v-list-item-title class="title">Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content app clipped-left clipped>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minus
        expedita doloribus sint nihil. Amet pariatur expedita rem excepturi
        facere adipisci veniam porro quae, ex cupiditate, laboriosam dolores ea!
        Minima.
      </p>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "a title", icon: "anicon" }],
      drawer: true,
      navbar: true,
      expandOnHover: true,
      miniVariant: true,
      colors: "blue",
      right: false,
      bg: null,
      mini: true
    };
  }
};
</script>

<style>
.fixed {
  position: fixed;
}
</style>
