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

<style scoped></style>
