<template>
  <div>
    <h1>{{ bookName }}</h1>
    <h2>Chapter {{ chapter }}</h2>
    <div>
      <router-link
        v-if="chapter > 1"
        class="book-link"
        :to="{
          name: 'book-show',
          params: {
            bookName: bookName,
            textLang: textLang,
            chapter: parseInt(chapter) - 1
          }
        }"
      >
        <span class="nav-chapter">previous chapter</span>
      </router-link>
      <router-link
        class="book-link"
        :to="{
          name: 'book-show',
          params: {
            bookName: bookName,
            textLang: textLang,
            chapter: parseInt(chapter) + 1
          }
        }"
      >
        <span>next chapter</span>
      </router-link>
    </div>
    <button @click="switchStylingKnownWords()">button</button>
    <div :class="isActiveColor ? 'active' : ''">
      <span @=""
        v-for="(index, key) in myDjangoList"
        :key="key"
        :isKnown="myDjangoDict[index]"
        >{{ index }}</span
      >
    </div>
  </div>
</template>

<script>
// import EventService from "@/services/EventService.js";

export default {
  props: ["bookName", "textLang", "chapter"],
  data() {
    return {
      myDjangoList: [],
      myDjangoDict: [],
      isActiveColor: true,
      paramso: {},
      test: 10
    };
  },
  watch: {
    "$route.params": function() {
      console.log("watch", this.$route.params);
      this.onLoad();
    },
    "$this.test": function() {
      console.log("YOLALD");
    }
  },
  created() {
    this.myDjangoList = [
      "四月", "间" ,"，", "天气", "寒冷", "晴朗", "，", "钟", "敲", "了", "十三", "下", "。", 
      "温斯顿", "史密斯", "为了", "要", "躲", "寒风", "，", "紧缩着", "脖子", "，", "很快", "地",
      "溜进", "了", "胜利", "大厦", "的", "玻璃门", "，", "不过", "动作", "不够", "迅速", "，",
      "没有", "能够", "防止", "一阵", "沙土", "跟着", "他", "刮", "进", "了", "门", "。"
    ]
    var knownList = ["了", "天气", "大厦", "的", "不过"]
    var i;
    for (i = 0; i < this.myDjangoList.length; i++) {
      var key = this.myDjangoList[i];
      if (knownList.includes(key)) {
        this.myDjangoDict[key] = "true";
      } else {
        this.myDjangoDict[key] = "false";
      }
      console.log(key)
    } 
    console.log("created", this.$route.params);
    this.onLoad();
  },
  methods: {
    onLoad() {
      console.log("on load", this.$route.params);
      // EventService.getBook(this.$route.params)
      //   .then(response => {
      //     this.myDjangoList = response.data.sentence;
      //     this.myDjangoisKnownList = response.data.isKnownList;
      //     this.myDjangoDict = response.data.isKnownDict;
      //   })
      //   .catch(error => {
      //     console.log("there was an error :" + error.response);
      //   });
    },
    switchStylingKnownWords() {
      this.isActiveColor = !this.isActiveColor;
    }
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
