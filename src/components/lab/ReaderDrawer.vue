<template>
  <v-navigation-drawer
    v-model="navbar"
    clipped
    app
    right
    fixed
    hide-overlay
    persistent
    width="300px"
    mobile-break-point="800"
    style="resize:both"
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
        <!-- <v-card v-for="word in wordDataComp" :key="word.id">
          <v-container class="info-container">
            <v-row>
              <v-col>{{ word.simplified }}</v-col>
              <v-col v-if="word.simplified != word.traditional">{{
                word.traditional
              }}</v-col>
            </v-row>
            <v-row>
              <v-col class="body-2">
                {{ word.pronunciation }}
              </v-col>
            </v-row>
            <v-row v-if="wordData">
              <v-col class="body-1">
                <ul class="definitions-container">
                  <li v-for="definition in word.definitions" :key="definition">
                    {{ definition }}
                  </li>
                </ul>
              </v-col>
            </v-row>
            <v-checkbox large v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
            <v-btn
              right
              @click.prevent="clicked = !clicked"
              icon
              :color="clicked ? 'red' : 'grey'"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn> 
            <p>    <template v-if="simComp!=tradComp">[]</template><template v-else>[ - ]</template></p>
            <p>{{ wordData ? wordData.pronunciation : "NaN" }}</p> 
          </v-container>
        </v-card> -->
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat tile>
          <v-card-text>second</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-3">
        <v-card flat tile>
        <!-- v-if="loggedIn" -->
          <v-switch
        :label="`isActiveColor 1:`"
        input-value="false"
      ></v-switch>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-navigation-drawer>
</template>

<script>
import WordCardMandarin from "@/components/lab/WordCardMandarin.vue";

export default {
  components: {
    WordCardMandarin: WordCardMandarin
  },
  props: ["navbar", "clickedWord", "wordData"],
  data() {
    return {
      wordData0: this.wordData,
      tab: null,
      tabs: 3,
      tabNames: ["words", "stats", "settings"],
      checkbox1: false,
      clicked: false
    };
  },
  watch: {
    wordData: function(newValue, oldValue) {
      console.log("WATCHER", newValue, oldValue);
      // console.log(newValue.definitions.split("/").filter(Boolean));
    }
  },
  computed: {
    drawerIsVisible: function() {
      return this.navbar;
    },
    tradComp: function() {
      return this.wordData0 ? this.wordData0.traditional : "NaN";
    },
    definitionsProcessed: function() {
      if (this.wordData0) {
        return ["ok"];
        // return this.wordData0.definitions.split("/").filter(Boolean);
      } else {
        return ["NaN"];
      }
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
    }
  },
  methods: {
    test1() {
      console.log(this.clicked);
      this.clicked = !this.clicked;
    }
  }
  // data() {
  //   return {
  //     clickedWord: null
  //   }
  // },
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
