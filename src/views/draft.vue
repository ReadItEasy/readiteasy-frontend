<template>
  <div>
    <h1>Draft</h1>
    <!-- <WordComp v-for="(index, key) in myDjangoList" :key="key" :word="myDjangoDict[index]" /> -->
    <!-- <WordComp
      v-for="(index, key) in myDjangoList"
      :key="key"
      :form="myDjangoDict[index].form"
      :isKnown="myDjangoDict[index].isKnown"
    /> -->
    <!-- <span
      v-for="(index, key) in myDjangoList"
      :key="key"
      :isKnown="myDjangoisKnownList[key]"
      >{{ index }}</span
    > -->
    <span
      v-for="(index, key) in myDjangoList"
      :key="key"
      :isKnown="myDjangoDict[index].isKnown"
      >{{ myDjangoDict[index].form }}</span
    >
  </div>
</template>

<script>
// import WordComp from "@/components/WordComp.vue";
import EventService from "@/services/EventService.js";

export default {
  // components: {
  //   WordComp: WordComp
  // },
  data() {
    return {
      myDjangoList: [],
      myDjangoDict: {},
      myDjangoisKnownList: [],

      myList: [0, 1, 2, 1, 2, 0, 1, 2, 2, 3, 1],
      myDict: {
        2: { form: "deux", color: "green", isKnown: "false" },
        1: { form: "un", color: "red", isKnown: true },
        3: { form: "trois", color: "red", isKnown: true },
        0: { form: "zero", color: "red", isKnown: true }
      }
    };
  },
  created() {
    console.log("created");
    EventService.djangoApiTest("1984_orwell/1")
      .then(response => {
        this.myDjangoList = response.data.sentence;
        this.myDjangoisKnownList = response.data.isKnownList;
        this.myDjangoDict = response.data.isKnownDict;
      })
      .catch(error => {
        console.log("there was an error :" + error.response);
      });
  }
};
</script>

<style scoped>
span[isKnown="true"] {
  color: red;
}
</style>
