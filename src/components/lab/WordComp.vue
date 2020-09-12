<template>
  <span :isKnown="isKnown">{{ form }}</span>
</template>

<script>
export default {
  props: {
    form: String,
    isKnown: String
  }
};
</script>

<style lang="scss" scoped></style>
