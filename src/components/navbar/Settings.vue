<template>
  <transition name="fade">
    <div v-if="$store.state.settings.showSettings" class="settings__menu" id="settings__menu">
      <div id="settings__header">
        <p id="settings__title">Settings</p>
      </div>
      <hr id="settings__hr" />
      <div id="settings__main">
        <div v-if="$store.getters.loggedIn">
          <span>Show unknown words :</span>
          <toggle-button
            :value="$store.state.settings.showUnknown"
            :sync="true"
            @change="toggleShowUnknown()"
            :labels="{checked: 'on', unchecked: 'off'}"
            color="#39b982"
          />
        </div>
        <div>
          <span>Font size :</span>
          <BaseIconBtn name="minus" class="settings__btn" @click.native="incrementFontSize(-1)" />
          <BaseIconBtn name="plus" class="settings__btn" @click.native="incrementFontSize(+1)" />
        </div>
        <!-- <button
            @click="toggleShowUnknown()"
          >{{ $store.state.settings.showUnknown ? "on" : "off" }}</button>
        <BaseSwitch />-->
      </div>
    </div>
  </transition>
</template>

<script>
import { callbackOnClickAway } from "@/utils/compositionFunctions.js";

import BaseIconBtn from "@/components/base/BaseIconBtn.vue";
// import BaseSwitch from "@/components/base/BaseSwitch.vue";

export default {
  components: {
    BaseIconBtn
    // BaseSwitch,
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
  font-family: $alt-font;
  background-color: white;
  position: absolute;
  top: 70px;
  right: 10px;
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

#settings__hr {
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  background-color: $primary-color;
  color: white;
  justify-content: center;
  vertical-align: middle;
  margin-left: 10px;

  &:hover {
    background-color: lighten($primary-color, 20%);
  }
  &:active {
    border: 1px solid #c9c9c9;
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
