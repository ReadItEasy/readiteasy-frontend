<template>
  <div :class="typeClass" class="notification alert alert-dismissible fade show" role="alert">
    <button type="button" class="close" @click="removeNotification(notification)">
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
    <!-- <span class="notification__message">{{ notification.message }}</span> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    }
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, this.notification.timeout || 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: { ...mapActions("notification", ["removeNotification"]) }
};
</script>

<style lang="scss" scoped>
.notification {
  font-size: 12px;

  // was used when i added a div for wrapping the notif__message
  &__message {
    font-size: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>