<template>
  <v-navigation-drawer
    ref="drawer"
    v-model="navbar"
    clipped
    app
    right
    fixed
    hide-overlay
    persistent
    width="navigation.width"
    mobile-break-point="1000"
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
            <v-list-item-title class="title red--text"
              >Sandra Adams</v-list-item-title
            >
            <v-list-item-subtitle>sandra_a88@gmail.com </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon large>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon class="display-1 orange">mdi-alphabetical</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          ><span class="display-1">{{
            clickedWord ? clickedWord.innerText : "NaN"
          }}</span></v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon class="display-1" color="orange">mdi-bullhorn</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{
          wordData ? wordData.pronunciation : "NaN"
        }}</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon x-large>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["navbar", "clickedWord", "wordData"],
  data() {
    return {
      navigation: {
        shown: this.navbar,
        width: 200,
        borderSize: 3
      }
    };
  },
  computed: {
    direction() {
      return this.navigation.shown === false ? "Open" : "Closed";
    }
  },
  methods: {
    setBorderWidth() {
      let i = this.$refs.drawer.$el.querySelector(
        ".v-navigation-drawer__border"
      );
      i.style.width = this.navigation.borderSize + "px";
      i.style.cursor = "ew-resize";
      i.style.backgroundColor = "red";
    },
    setEvents() {
      const minSize = this.navigation.borderSize;
      const el = this.$refs.drawer.$el;
      const drawerBorder = el.querySelector(".v-navigation-drawer__border");
      // const vm = this;
      const direction = el.classList.contains("v-navigation-drawer--right")
        ? "right"
        : "left";

      function resize(e) {
        document.body.style.cursor = "ew-resize";
        let f =
          direction === "right"
            ? document.body.scrollWidth - e.clientX
            : e.clientX;
        el.style.width = f + "px";
      }

      drawerBorder.addEventListener(
        "mousedown",
        e => {
          if (e.offsetX < minSize) {
            el.style.transition = "initial";
            document.addEventListener("mousemove", resize, false);
          }
        },
        false
      );

      document.addEventListener(
        "mouseup",
        () => {
          el.style.transition = "";
          this.navigation.width = el.style.width;
          document.body.style.cursor = "";
          document.removeEventListener("mousemove", resize, false);
        },
        false
      );
    }
  },
  mounted() {
    this.setBorderWidth();
    this.setEvents();
  }
};
</script>

<style>
.v-list-item-title {
  font-size: 30px;
}
body {
  font-size: 26px !important;
}
</style>
