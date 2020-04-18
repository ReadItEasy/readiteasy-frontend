<template>
  <v-card>
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
      <v-row>
        <v-col class="body-1">
          <ul class="definitions-container">
            <li v-for="definition in word.definitions" :key="definition">
              {{ definition }}
            </li>
          </ul>
        </v-col>
      </v-row>
      <!-- <v-checkbox large v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox> -->
      <v-btn
        v-if="loggedIn"
        right
        @click="toggleIsKnown"
        icon
        :color="
          $store.state.userKnownWordsDict[word.simplified] ? 'primary' : 'grey'
        "
      >
        <!-- <v-icon>mdi-heart</v-icon> -->
        <v-icon v-if="$store.state.userKnownWordsDict[word.simplified]"
          >mdi-checkbox-marked</v-icon
        >
        <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
      </v-btn>
      <!-- <p>    <template v-if="simComp!=tradComp">[]</template><template v-else>[ - ]</template></p> -->
      <!-- <p>{{ wordData ? wordData.pronunciation : "NaN" }}</p> -->
    </v-container>
  </v-card>
</template>

<script>
import { authComputed } from "@/store/helpers.js";

export default {
  props: ["word"],
  data() {
    return {
      isKnown: false
    };
  },
  methods: {
    toggleIsKnown() {
      this.$store.dispatch("toggleKnownWord", this.word.simplified);
      this.$forceUpdate();
    }
  },
  computed: {
    ...authComputed
  }
};
</script>

<style></style>
