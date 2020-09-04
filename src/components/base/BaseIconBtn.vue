<template>
  <button class="btn-icon" :title="tooltip">
    <BaseIconCustom :name="name" :height="height" :width="width" :color="color" />
  </button>
</template>

<script>
import BaseIconCustom from "./BaseIconCustom.vue";
export default {
  components: {
    BaseIconCustom
  },
  props: {
    name: String,
    tooltip: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: [String],
      default: "#00000066"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-icon {
  // min-width: 100px;
  // font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 0;
  background-color: Transparent;
  outline: none;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  margin: 0 auto;
}

.btn-icon:hover {
  // background: #1b063d;
  // color: lighten(red, 10%);
}

.btn-icon:active {
  // outline: none;
  // background-color: rgb(0,0,0, 30%);
}
</style>
