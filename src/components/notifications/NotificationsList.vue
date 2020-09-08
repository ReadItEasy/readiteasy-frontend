<template>
    <transition-group class="notifications-list" name="list-complete" tag="div">
      <notification-message
        v-for="notification in $store.getters['notification/notifications']"
        :key="notification.id"
        :notification="notification"
        class="list-complete-item"
      />
    </transition-group>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
// import { mapState, mapGetters } from "vuex";
export default {
  components: {
    NotificationMessage
  }
  // computed: {this.$store.getters}
};
</script>


<style lang="scss" scoped>
.notifications-list {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0px;
  right: 0px;
  margin-top: 15px;
  margin-right: 15px;
  z-index: 10;
}

.list-complete-item {
  transition: all 1s;
  // width: 180px;

  // display: inline-block;
  // margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: translateY(-80px);
  transform: translateX(80px);
}
.list-complete-leave-active {
  position: absolute;
}

.flip-list-move {
  transition: transform 1s;
}
</style>