<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height" :color="color">
      <use
        v-bind="{
          'xlink:href': href
        }"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
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
  },
  computed: {
    href() {
      const prodHref = "/feather-sprite-custom.svg#" + this.name;
      const devHref = "/feather-sprite-custom.svg#" + this.name;
      return process.env.NODE_ENV === "production" ? prodHref : devHref;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  /* color: #00000066; */
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  color: currentColor;
  /* stroke-width: 2; */
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin: 0 auto;
}

// .icon:hover {
//   color: lighten(currentColor, 50%);
// }
</style>
