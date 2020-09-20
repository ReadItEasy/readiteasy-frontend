<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height" :color="color">
      <use
        v-bind="{
          'xlink:href': '/feather-sprite.svg#' + name
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
      const prodHref = "/readiteasy-frontend/feather-sprite.svg#" + this.name;
      const devHref = "/feather-sprite.svg#" + this.name;
      return process.env.NODE_ENV === "production" ? prodHref : devHref;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: #00000066;
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
