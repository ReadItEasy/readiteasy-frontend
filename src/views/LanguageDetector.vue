<template>
  <div>
    <h1>Language Detector</h1>
    <textarea
      v-model="textInput"
      placeholder="enter your text here"
      @input="guessLanguage()"
    ></textarea>
    <h2>{{ prediction }}</h2>
    <h3>the message is {{ message }}</h3>
    <h3>{{ $store.state.tokens }}</h3>
  </div>
</template>

<script>
import { apiBooks } from "@/services/ApiService.js";

export default {
  data() {
    return {
      textInput: "",
      prediction: "Come on !",
      message: "..."
    };
  },
  methods: {
    guessLanguage() {
      apiBooks
        .get("/api-books/language-detector", {
          params: {
            textInput: this.textInput
          }
        })
        .then(response => {
          this.prediction = response.data.prediction;
        })
        .catch(error => {
          console.log("there was an error :" + error.response);
        });
    }
  },
  created() {
    apiBooks.get("/hello").then(({ data }) => {
      this.message = data.message;
    });
  }
};
</script>

<style scoped>
.active > span[isKnown="true"] {
  color: green;
}

.active > span[isKnown="false"] {
  color: red;
}

.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.nav-chapter {
  margin-right: 1em;
}
</style>
