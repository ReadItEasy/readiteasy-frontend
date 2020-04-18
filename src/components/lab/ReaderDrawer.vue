<template>
  <v-navigation-drawer
    v-model="drawerBool"
    clipped
    app
    right
    fixed
    hide-overlay
    persistent
    width="300px"
    mobile-break-point="800"
  >
    <!-- <template v-slot:prepend > -->

    <v-tabs v-model="tab" class="elevation-2">
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i}`">
        {{ tabNames[i - 1] }}
        <!-- <v-icon v-if="icons">mdi-phone</v-icon> -->
      </v-tab>

      <v-tab-item value="tab-1">
        <WordCardMandarin
          v-for="word in wordDataComp"
          :key="word.id"
          :word="word"
        ></WordCardMandarin>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat tile>
          <v-card-text>second</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-3">
        <v-card flat tile class="px-5">
          <!-- v-if="loggedIn" -->
          <v-switch
            v-model="lightenUknWordsBoolComp"
            :label="`show unknown words ${lightenUknWordsBoolComp}`"
          ></v-switch>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-navigation-drawer>
</template>

<script>
import WordCardMandarin from "@/components/lab/WordCardMandarin.vue";
import EventBus from "@/services/EventBus.js";


export default {
  components: {
    WordCardMandarin: WordCardMandarin,
  },
  props: ["drawerBool", "clickedWord", "wordData"],
  data() {
    return {
      tab: null,
      tabs: 3,
      tabNames: ["words", "stats", "settings"],
      checkbox1: false,
      clicked: false,
      lightenUknWordsBool: false
    };
  },
  // mounted() {
  //   this.lightenUknWordsBool = true
  // },
  computed: {
    drawerIsVisible: function() {
      return this.drawerBool;
    },
    wordDataComp: function() {
      if (this.wordData) {
        console.log("COMP", this.wordData);
        var wordDataProcessed = [];
        for (var word of this.wordData) {
          console.log("check", word.definitions.split("/").filter(Boolean));
          word.definitions = word.definitions.split("/").filter(Boolean);
          wordDataProcessed.push(word);
        }
        console.log("finished list", wordDataProcessed);
        return wordDataProcessed;
      } else {
        return null;
      }
    },
    lightenUknWordsBoolComp: {
      get() {
        return this.lightenUknWordsBool;
      },
      set(val) {
        EventBus.$emit("lightenUknWordsBoolChange", val);
        console.log("setter lightenUknWordsBool", val);
        this.lightenUknWordsBool = val;
      }
    }
  }
};
</script>
<style scoped>
body {
  color: red;
}
.info-container {
  padding: 1rem;
  font-size: 26px;
  color: #4c4c4c;
}

.definition-container > p {
  margin-bottom: 0px;
}
</style>
