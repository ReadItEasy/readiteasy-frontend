<template>
  <transition name="fade">
    <div v-if="$store.state.settings.showSettings" class="settings__menu" id="settings__menu">
      <div id="settings__header">
        <p id="settings__title">Settings</p>
      </div>
      <hr id="settings__hr" />
      <div id="settings__main">
        <p v-if="$store.getters.loggedIn">
          Show unknown words :
          <button
            @click="toggleShowUnknown()"
          >{{ $store.state.settings.showUnknown ? "on" : "off" }}</button>
          <BaseSwitch />
        </p>
        <p>
          Font size :
          <BaseIconBtn name="minus" class="settings__btn" @click.native="incrementFontSize(-1)"/>
          <BaseIconBtn name="plus" class="settings__btn" @click.native="incrementFontSize(+1)"/>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { callbackOnClickAway } from "@/utils/compositionFunctions.js";

import BaseIconBtn from "@/components/base/BaseIconBtn.vue";
import BaseSwitch from "@/components/base/BaseSwitch.vue";

export default {
  components: {
    BaseIconBtn,
    BaseSwitch,
  },
  setup(props, context) {
    function hideSettings() {
      context.root.$store.dispatch("hideSettings");
    }
    const clickawayClassList = ["settings__opener", "settings__menu"];

    // activate the callback 'hideSettings' when clicking awa
    callbackOnClickAway(hideSettings, clickawayClassList);
  },
  methods: {
    toggleShowUnknown() {
      this.$store.dispatch("toggleShowUnknown");
    },
    incrementFontSize(increment) {
      this.$store.dispatch("incrementFontSize", increment);
    }
  }
};
</script>

<style lang="scss" scoped>
.settings__menu {
  font-family: "Comfortaa", cursive;
  background-color: white;
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

#settings__header p {
  color: $primary-color;
  font-size: 24px;
  font-weight: 500;
}

@mixin button-reset {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}


.settings__btn {
  $button-size: 30px;
  width: $button-size;
  height: $button-size;
  border-radius: 50%;
  // border: 1px solid grey;
  background-color: lighten($primary-color, 20%);
  color: white;
  justify-content: center;
  vertical-align: middle;
  margin-left: 10px;


  &:hover {
    background-color: $primary-color;
  }
  &:active {
  border: 1px solid grey;

  }
}
// .settings__btn:hover {
// }

// .btn-custom {
//   @include button-reset;
//   background-color: blue;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;

//   :hover {
//     background-color: red;
//   }
// }

/* ********************************************************* */
/* *************** Transition/Animation part *************** */
/* ********************************************************* */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
