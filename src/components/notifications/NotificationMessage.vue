<template>
  <div class="capsule">
    <div :class="typeClass" class="notification" role="alert">
      <!-- <div :class="typeClass" class="notification alert alert-dismissible fade show" role="alert"> -->
      <div class="notification__progress-bar" ref="bar"></div>
      <BaseIconCustom :name="'notification-'+ notification.type" class="notification__icon" />
      <span class="notification__title">{{ notification.title }}</span>
      <span class="notification__message">{{ notification.message }}</span>
      <button type="button" class="notification__close" @click="removeNotification(notification)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import BaseIconCustom from "@/components/base/BaseIconCustom.vue";

export default {
  components: {
    BaseIconCustom
  },
  props: ["notification"],
  data() {
    return {
      timeout: null
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
  mounted() {
    setTimeout(() => {
      this.$refs.bar.setAttribute(
        "style",
        `width: 0%; transition-duration: ${this.notification.timeout}ms;`
      );
    }, 30);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: { ...mapActions("notification", ["removeNotification"]) }
};
</script>

<style lang="scss" scoped>
.capsule {
  width: 100%;
}

.notification {
  position: relative;
  float: right;
  display: inline-flex;
  align-items: center;
  clear: both;
  // text-align: right;
  width: auto;
  font-size: 14px;
  font-family: "Lato", Tahoma, Arial;
  margin-bottom: 10px;
  padding: 15px 0 15px 15px;
  border-radius: 3px;
  box-shadow: inset 0 -10px 20px -10px rgba(0, 0, 0, 0.2),
    inset 0 0 5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.25);

  // was used when i added a div for wrapping the notif__message
  &__title {
    font-weight: bolder;
    padding-right: 10px;
  }

  &__message {
    color: rgba(0, 0, 0, 0.6);
  }

  &__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0 0 3px 3px;
    width: 100%;
    transition-property: width;
    transition-timing-function: linear;
  }

  &__icon {
    margin-right: 10px;
  }

  &__close {
    @include button-reset;
    // position: absolute;
    // right: 15px;
    // margin: auto;
    // position: absolute;
    height: 100%;
    // padding-right: 100%;
    width: 40px;
    // top: 0px;
    // right: 0px;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    :hover {
      color: black;
    }
    span {
      height: 100%;

    }
  }
}

.alert {
  &-success {
    background-color: $success-color;
    border-color: $success-color;
  }
  &-warning {
    background-color: $warning-color;
    border-color: $warning-color;
  }
  &-error {
    background-color: $error-color;
    border-color: $error-color;
  }
  &-info {
    background-color: $info-color;
    border-color: $info-color;
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