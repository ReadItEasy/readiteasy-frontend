<template>
  <div class="settings__menu" id="settings__menu">
    <div>
      <h6>Settings</h6>
    </div>
    <div>
      <p v-if="$store.getters.loggedIn">
        Show unknown words :
        <button
          @click="toggleShowUnknown()"
        >{{ $store.state.settings.showUnknown ? "on" : "off" }}</button>
      </p>
      <p>
        Font size
        <button @click="incrementFontSize(-1)">-</button>
        <button @click="incrementFontSize(+1)">+</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickListener: null
    };
  },
  mounted() {
    document.addEventListener("click", this.clickHandler);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickHandler);
  },
  methods: {
    toggleShowUnknown() {
      this.$store.dispatch("toggleShowUnknown");
    },
    incrementFontSize(increment) {
      this.$store.dispatch("incrementFontSize", increment);
    },
    hideSettings() {
      this.$store.dispatch("hideSettings");
    },
    clickHandler(e) {
      const checkParentsHasClassname = function(target, idsToCheck) {
        if (idsToCheck.includes(target.id)) {
          return true;
        } else {
          if (target.parentElement) {
            if (checkParentsHasClassname(target.parentElement, idsToCheck)) {
              return true;
            }
          }
        }
        return false;
      };
      const parentHasId = checkParentsHasClassname(e.target, [
        "settings__btn",
        "settings__menu"
      ]);

      if (!parentHasId) {
        this.hideSettings();
      }
    }
  }
};
</script>

<style scoped>
.settings__menu {
  background-color: white;
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

p {
  margin: 0;
  padding: 0;
}
</style>
